import classes from "./title.module.css"

const Title = props => {
    return (
        <h1 id={props.ids} className={classes.titleStyle}>{props.title}</h1>
    )
}

export default Title;