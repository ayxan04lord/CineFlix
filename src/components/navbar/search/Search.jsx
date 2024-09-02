import './Search.css'

import Input from '../../common/input/Input';
import Button from '../../common/button/Button';

const Search = () => {
    const icon = <i class="fa-solid fa-magnifying-glass"></i>
    return(
        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 px-0">
            <div className="search d-flex justify-content-center align-items-center">
                <Input type="text" placeholder="Search Movies" name="search_b" className="myInput"  />
                <Button type="button" name="search" className="btn btn-warning myButton" text={icon} />
            </div>
        </div>
    )
}

export default Search;