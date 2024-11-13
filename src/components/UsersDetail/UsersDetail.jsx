import { useLoaderData } from "react-router-dom";


const UsersDetail = () => {

    const users = useLoaderData();
    const {name, website} = users;


    return (
        <div>
            <h2>Details about user: {name} </h2>
            <p>Website: {website} </p>
        </div>
    );
};

export default UsersDetail;