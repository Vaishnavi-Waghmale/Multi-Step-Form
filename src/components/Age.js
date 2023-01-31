import React from "react";

function Age({ formData, setFormData }) {
    return (
        <div className="age-container">

            <input
                type="text"
                placeholder="Your Age"
                value={formData.age}
                onChange={(e) => {
                    setFormData({ ...formData, age: e.target.value });
                }}
            />
        </div>

    );
}

export default Age;