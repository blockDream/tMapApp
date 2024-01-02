export const getIconAssetURL = (image) => {
		
    const path  = `../static/images/index/layerPanel/${image}`
    const modules = import.meta.globEager('../static/images/index/layerPanel/*')
    return modules[path]?.default

}