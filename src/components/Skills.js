import React from "react";

function Skills({ formData, setFormData }) {
    return (
        <div className="skill-container">
            <input
                type="text"
                placeholder="Your Skills.."
                value={formData.skill}
                onChange={(e) => {
                    setFormData({ ...formData, skill: e.target.value });
                }}
            />

        </div>
    );
}

export default Skills;
