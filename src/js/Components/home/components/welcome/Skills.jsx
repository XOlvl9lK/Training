import React from 'react';

const Skills = () => {
    const skills = ['Design', 'Marketing', 'Photography', 'Branding', 'Development', 'SEO'];

    return (
        <div className="skills">
            {skills.map((skill, index) =>  (
                <div key={index+1}>
                    <p>{skill}</p>
                    <span> </span>
                </div>
            ))}
        </div>
    );
};

export default Skills;