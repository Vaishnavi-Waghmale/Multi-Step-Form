import React, { useState } from "react";
import Email from "./Email";
import ExtraActivity from "./ExtraActivity";
import Age from "./Age";
import Skills from "./Skills";
function Form() {


    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        extra: "",
        age: "",
        skill: ""
    });

    const FormTitles = ["Email", "Extra Activities", "Age", "Skills"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Email formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <ExtraActivity formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <Age formData={formData} setFormData={setFormData} />;
        }
        else {
            return <Skills formData={formData} setFormData={setFormData} />
        }
    };

    return (
        <div className="form">
            <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}
                ></div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
