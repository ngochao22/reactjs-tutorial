import React from "react";

export default function Header({ title, name, email, age, onChange }) {
    return (
        <>
            <h2>{title}</h2>
            <input
                type="text"
                placeholder="Nhập từ khóa..."
                onChange={onChange}
            />
        </>
    );
}

//props là 1 object dùng để truyền dữ liệu từ component cha xuống component con
//props chỉ truyền xuống, và không thể thay đổi
