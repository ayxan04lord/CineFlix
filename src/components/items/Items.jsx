import './Items.css';

const Items = ({ movie }) => {
    const poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

    return (
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="items">
                <img className="item_img" src={poster} alt="Movie" />
                <p className="s_title">{movie.title}</p>
            </div>
        </div>
    );
};

export default Items;
