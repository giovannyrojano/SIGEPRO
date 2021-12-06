import {
    // rest of the elements/components imported remain same
    useParams
} from 'react-router-dom';

const Project = () => {
    const { slug } = useParams();
    const post = BlogPosts[slug];
    const { title, description } = post;
    return (
        <div style={{ padding: 20 }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

const BlogPosts = {
    '1': {
        title: 'Primer proyecto',
        description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    '2': {
        title: 'Segundo proyecto',
        description: 'Hello React Router v6'
    }
};

export default Project;