export let config:UIConfig = {};

export interface UIConfig {
    appName?: string 
    repoUrl?: string 
    panel?:{
        echarts: {
            enableBaiduMap: boolean
            baiduMapAK: string
        }
    }
}
