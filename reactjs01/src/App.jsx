import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    const handleClick = (e) => {
        console.log("hello anh em", e);
    };
    const handleRemove = (index) => {
        console.log(index);
    };
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const users = ["User 1", "User 2", "User 3"];
    const status = false;
    const user = {
        name: "Hoàng AN",
        email: "hoangan.web@gmail.com",
        age: 32,
    };
    return (
        <Fragment>
            <Header title="Header 1" {...user} onChange={handleChange} />
            {/* <Header title="Header 2" /> */}
            {status ? <h1>Học React rất dễ</h1> : <h2>Học React rất khó</h2>}
            {users.map((user, index) => (
                <h2 key={index}>
                    {user}{" "}
                    <button
                        onClick={() => {
                            handleRemove(index);
                        }}
                    >
                        Remove
                    </button>
                </h2>
            ))}
            <button onClick={handleClick}>Click me</button>
            <Footer />
        </Fragment>
    );
}
