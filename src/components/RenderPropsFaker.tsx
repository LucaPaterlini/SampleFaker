import React, {ReactElement} from "react"
import { faker } from '@faker-js/faker'

const bigList : User[] = [...Array(50)].map(() => ({
    name: faker.person.firstName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}));
type User = { avatar: string; name: string; email: string }

interface ListProps {
    data: User[];
    renderItem: (item: any) => ReactElement
    renderEmpty?: ReactElement;
}


export function List({ data = [], renderItem, renderEmpty = <p>Empty</p> }:ListProps) :ReactElement { return !data.length ? (
    renderEmpty
):( <ul>
    {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
    ))}
</ul> );
}


function RenderProps(){
    const renderItem = (item: { avatar: string; name: string; email: string }) => (
        <div style={{ display: "flex" }}>
            <img src={item.avatar} alt={item.name} width={50} />
            <p>
                {item.name} - {item.email}
            </p>
        </div> );
    return <List data={bigList} renderItem={renderItem} />;
}

export default RenderProps