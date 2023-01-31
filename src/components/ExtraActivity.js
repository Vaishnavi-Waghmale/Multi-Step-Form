import React from "react";

function ExtraActivity({ formData, setFormData }) {
    return (
        <div className="extra-activity-container">

            <input
                type="text"
                placeholder="Your Extra Activities..."
                value={formData.extra}
                onChange={(e) => {
                    setFormData({ ...formData, extra: e.target.value });
                }}
            />
        </div>
    );
}

export default ExtraActivity;