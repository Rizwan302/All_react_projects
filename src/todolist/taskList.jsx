import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import { TodoContext } from './Context/ContextApi';



export default function TaskList() {
    return (
        <TodoContext.Provider>
            <div>
                <p>Task Number 1</p>

                <div className="">
                    <button>
                        <ImPencil />
                    </button>
                    <button>
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </TodoContext.Provider>
    )
}
