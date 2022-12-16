import React from "react";

const labelColors = new Map <string, React.CSSProperties>();
const white = '#FFF';

labelColors.set('react', {
    backgroundColor:'#61DAFB',
    color:'#282C34'
})
labelColors.set('angular', {
    backgroundColor:'#D7012F',
    color:white
})
labelColors.set('vue', {
    backgroundColor:'#3FB27F',
    color:white
})
labelColors.set('svelte', {
    backgroundColor:'#F83A01',
    color:white,
    boxShadow:'border-box',
    border:'.1px solid #FFFF'
})
labelColors.set('go', {
    backgroundColor:'#0DA6D0',
    color:white
})
labelColors.set('elixir', {
    backgroundColor:'#64466E',
    color:white
})
labelColors.set('rust', {
    backgroundColor:'#111',
    color:white
})
labelColors.set('aws', {
    backgroundColor:'#FF9800',
    color:white
})
labelColors.set('gcp', {
    backgroundColor:'#31A350',
    color:white
})
labelColors.set('postgres', {
    backgroundColor:'#31648C',
    color:white
})
labelColors.set('bash', {
    backgroundColor:'#111',
    color:'#017B00'
})

const getColor = (labelStr:string):React.CSSProperties => {
    const css = labelColors.get(labelStr);
    if(!css) {
        return {
            backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            color:'#FFF'
        }
    }
    return css;
}

export default getColor;