import React from "react";

function Email({ formData, setFormData }) {
    return (
        <div className="email-container">
            <input
                type="text"
                placeholder="Email.."
                value={formData.email}
                onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                }}
            />

        </div>
    );
}

export default Email;
