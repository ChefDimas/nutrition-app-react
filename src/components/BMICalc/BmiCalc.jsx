import React from "react";

const BmiCalc = () => {
    return (
        <main>
            <div className="form-group right">
                <label htmlFor="weight" className="">Weight</label>
                <input type="range" min="20" max="100" step="5" value="0" id="experience"
                       className="form-input"
                        />
                <span id="range-label">20K</span>
                <label />
            </div>
        </main>
    )
};

export default BmiCalc;