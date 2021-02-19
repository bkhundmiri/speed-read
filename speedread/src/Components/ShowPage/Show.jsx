import Content from "../Content/Content"

export default function Show (props) {
    return (
        <div id="content-container">
                {props.reads.map((read) => (
                    <Content key={read.id} read={read}/>
                ))}
        </div>
    )
}