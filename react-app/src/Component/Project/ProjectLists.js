
import { Link } from "react-router-dom";
const ProjectLists = () => {
    return (
        <ul>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/project/${slug}`}>
                        <h3>{title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

const BlogPosts = {
    '1': {
        title: 'Primer proyecto',
        description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    '2': {
        title: 'segundo proyecto',
        description: 'Hello React Router v6'
    }
};

export default ProjectLists;