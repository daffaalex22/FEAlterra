import './List.css'

const List = (props) => {
    const list = props.list;

    return (
        list.map((item) => (
            <div className="list" key={item.id}>
                {item.completed ?
                    <button className="completed">{item.title}</button> :
                    <button className="incompleted">{item.title}</button>
                }
            </div>
        ))
    );
}

export default List;