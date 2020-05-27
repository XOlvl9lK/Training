import React from 'react';
import {Link} from 'react-router-dom';

const AboutMe = () => (
    <div className="about-me container">
        <figure>
            <img src="../img/about.jpg" alt="about me"/>
            <figcaption>
                <h1>Failure Is The Condiment That Gives Sucess It'S Flavour</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum fugiat quod ullam earum
                    dignissimos corporis, nemo provident nostrum, nihil culpa. Et corrupti sit hic amet, animi unde cumque consequuntur
                    omnis ad nihil optio id eum qui, impedit deleniti? Veniam eum aspernatur incidunt? Doloremque, cum? Repellendus
                    consectetur, cupiditate tenetur provident neque, quas, totam eveniet nisi eius veritatis ea maiores ducimus a
                    reprehenderit minima magnam dicta! Aliquam libero voluptatum facilis dolorum architecto? Doloribus fuga voluptate
                    voluptatem corporis rem! Culpa nam et accusamus beatae!
                </p>
                <Link to='/services'><button>About me</button></Link>
            </figcaption>
        </figure>
    </div>
);

export default AboutMe;