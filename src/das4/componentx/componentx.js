// export default function X(){
//     return <h1>Hello</h1>
// }

import React from "react"

export default function D() {
    let s = {}
    let change = ((e) => {
        const { value } = e.target
        s = { s, value }

    })

    return (


        <form onSubmit={(e) => {
            e.preventDefault();
            let inputs = e.target.querySelectorAll("input");
            for (let i in inputs) {
                inputs[i].value = "";
            }
        }}>



            <div className="d">
                <input type='text'
                    onChange={change}
                    value={s.text}
                    name="inp" placeholder="email" />
                <br />
                <input type='text'
                    name="inp1"
                    onChange={change}
                    value={s.text}
                    placeholder="password" />
                <br />
                <input type='text'
                    name="inp2"
                    onChange={change}
                    value={s.text}
                    placeholder="file" />
                <br />
                <input type='text'
                    name="inp3"
                    onChange={change}
                    value={s.text}
                    placeholder="number" />
                <br />
                <button>onClick</button>
            </div>
        </form>

    )
}