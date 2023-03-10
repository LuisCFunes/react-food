import classes from "./title.module.css"

const Title = props => {
    return (
        <h1 id={props.id} className={classes.titleStyle}>{props.title}</h1>
    )
}

export default Title;