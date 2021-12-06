
import {
    Outlet
} from 'react-router-dom';

const Projects = () => {
    return (
        <div style={{ padding: 20 }}>
            <h2>Proyectos</h2>
            {/* render any matching child */}
            <Outlet />
        </div>
    );
}
export default Projects;
