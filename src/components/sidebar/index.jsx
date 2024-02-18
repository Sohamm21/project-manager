import React from 'react';

import './index.css'

export const Sidebar = () => {
    return (
        <div className='sidebar-wrapper mt-5'>
            <h1>Projects</h1>
            <button type="button" class="btn btn-secondary sidebar-projects-btn">+ Add Project</button>
        </div>
    );
}