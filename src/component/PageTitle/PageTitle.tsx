import css from "./PageTitle.module.css"

type PropTypes = {
    title:string
}


export const PageTitle = (props:PropTypes)=>{
    return (
        <h1 className={css.title}>{props.title}</h1>
    )
}