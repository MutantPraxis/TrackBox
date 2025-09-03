import React from 'react';
import '../css/Navigation.css';

type NavigationProps = {
    onNavigate: (route: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
    return (
        <nav className="tb3-nav">
            <ul style={{ display: 'flex' }}>
                <li className="tb3-title">
                    <span>
                      Track Box
                    </span>
                </li>
                <li>
                    <button onClick={() => onNavigate('upload')}>
                        Upload
                    </button>
                </li>
                <li>
                    <button onClick={() => onNavigate('create-playlist')}>
                        Create Playlist
                    </button>
                </li>
                <li>
                    <button onClick={() => onNavigate('search-tracks')}>
                        Search
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;