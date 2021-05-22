const tagsGenerator =  (model) =>{
    console.log('generator',process.env.TAGS_ATTRIBUTES)
    const regex = /[\s,\.;:\(\)\-']/
    let toTags = process.env.TAGS_ATTRIBUTES.split(' ');
    console.log(toTags)
    let tags = []

    toTags.map((item)=>{
        console.log('ttt',item)
        if(model[item]){

           if(model[item].isArray){
            model[item].map((item)=>{
                tags.push(...item.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase().trim().split(regex))   
            })
           }else{
            tags.push(...model[item].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase().trim().split(regex))   
           }
        }


    })

    return tags
}
module.exports = {
    tagsGenerator
}