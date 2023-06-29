import { HStack, Select, StackDivider, Text } from "@chakra-ui/react"
import {  variables } from "src/views/dashboard/Dashboard"
import { TimeChangedEvent, VariableChangedEvent } from "src/data/bus-events"
import { Variable, VariableQueryType, VariableRefresh } from "types/variable"
import useBus, { dispatch } from "use-bus"
import storage from "utils/localStorage"
import { useEffect, useState } from "react"
import { DatasourceType } from "types/dashboard"
import { isEmpty, set } from "lodash"
import { queryPromethuesVariableValues } from "../dashboard/plugins/datasource/prometheus/query_runner"
import { queryHttpVariableValues } from "../dashboard/plugins/datasource/http/query_runner"
import { datasources } from "src/views/App"
import ChakraMultiSelect from "components/select/ChakraMultiSelect"
import PopoverSelect from "components/select/PopoverSelect"

interface Props {
    id: number
    variables: Variable[]
}

const vkey = "apm-variables"
const SelectVariables = ({ id, variables }: Props) => {
    return (<HStack spacing={4}>
        {variables.map(v => {
            return <SelectVariable v={v} />
        })}
    </HStack>)
}

export default SelectVariables

const AllOptionName = '__all__'
const SelectVariable = ({ v }: { v: Variable }) => {
    const [values, setValues] = useState<string[]>([])

    useBus(
        (e) => { return e.type == TimeChangedEvent },
        (e) => {
            if (v.refresh == VariableRefresh.OnTimeRangeChange) {
                loadValues()
            }
        },
        [v]
    )
    
    useEffect(() => {
        loadValues()
    }, [])

    const loadValues = async () => {
        const result = await queryVariableValues(v)
        setValues(result)
        v.values = result
        if (v.enableAll) {
            v.values.unshift("__all__")
        }
    }


    const value = isEmpty(v.selected) ? [] : v.selected.split(',')
    console.log("here33333vvv", v, value)
    return <HStack key={v.id} spacing={2}>
        <Text fontSize="sm" minWidth="fit-content">{v.name}</Text>
        {!isEmpty(values) &&
        <PopoverSelect 
            value={value} 
            size="sm" 
            variant="unstyled" 
            onChange={value => {
                setVariableValue(v, value.join(','))
            }}
            options={ values.map(v => ({value:v, label:v == AllOptionName ? "ALL" : v}))}
            exclusive="__all__"
            isMulti={v.enableMulti}
            showArrow={false}
        />}
    </HStack>
}
export const setVariableSelected = (variables: Variable[]) => {
    let sv = storage.get(vkey)
    if (!sv) {
        sv = {}
    }

    for (const v of variables) {
        const selected = sv[v.id]
        if (!selected) {
            v.selected = v.values[0]
        } else {
            v.selected = selected
        }
    }
}


export const setVariableValue = (variable: Variable, value) => {
    // let exist = false;
    // for (var i = 0; i < variable.values.length; i++) {
    //     if (variable.values[i] == value) {
    //         exist = true
    //         break
    //     }
    // }

    // if (!exist) {
    //     return `value ${value} not exist in variable ${variable.name}`
    // }

    variable.selected = value
    for (let i = 0; i < variables.length; i++) {
        if (variables[i].id == variable.id) {
            variables[i] = variable
        }
    }

    const sv = storage.get(vkey)
    if (!sv) {
        storage.set(vkey, {
            [variable.id]: value
        })
    } else {
        sv[variable.id] = value
        storage.set(vkey, sv)
    }

    dispatch(VariableChangedEvent)
}

export const setVariable = (name, value, toast?) => {
    let v;
    for (var i = 0; i < variables.length; i++) {
        if (variables[i].name == name) {
            v = variables[i]
            break
        }
    }

    setVariableValue(v, value)
    // if (err && toast) {
    //     toast({
    //         title: "On row click error",
    //         description: err,
    //         status: "warning",
    //         duration: 9000,
    //         isClosable: true,
    //     })
    // }
}

export const queryVariableValues = async (v:Variable) => {
    let result = []
    if (v.type == VariableQueryType.Custom) {
        if (v.value.trim() != "") {
            result = v.value.split(",")
        }
    } else {
        const ds = datasources.find(d => d.id == v.datasource)
        switch (ds?.type) {
            case DatasourceType.Prometheus:
                result = await queryPromethuesVariableValues(v)
                break;
            case DatasourceType.ExternalHttp:
                result = await queryHttpVariableValues(v)
                break;
            default:
                break;
        }
    }

    if (!isEmpty(v.regex)) {
        const regex = new RegExp(v.regex)
        result = result?.filter(v => regex.test(v))
    }
   
    return result??[]
}