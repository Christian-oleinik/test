import React, {Component} from "react";
import '../../index.css'
import CategoryItem from "./CategoryItem"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
<<<<<<< Updated upstream
import { getBacklog} from "../../actions/categorieAction";

class CategoryComponent extends Component{
    componentDidMount(){
        this.props.getBacklog();
    }

    render(){
        const {categorie} = this.props.categorie;

        let CategoriesAlgo;
        let categories = [];

        const Categories = categorie =>{
            const cat = categorie.map(categorie => (<CategoryItem key={categorie.id} categorie={categorie}/>));
            for(let i = 0; i< cat.length; i++)
                categories.push(cat[i]);
            return(
                <React.Fragment>
                    <div className="center">
                        {categories}
                    </div>
                </React.Fragment>);
        };

        CategoriesAlgo = Categories(categorie);
        return(
            <div>
                {CategoriesAlgo}
=======
import { getSingle } from "../../actions/categorieSingleAction";

class CategoryComponent extends Component{
    componentDidMount(){
        const { c_id } = this.props.match.params;
        this.props.getSingle(c_id);
    }

    render(){
        return(
            <div>

>>>>>>> Stashed changes
            </div>
        );
    }
}

<<<<<<< Updated upstream

CategoryComponent.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    categorie: PropTypes.object.isRequired
};

const  mapStateToProps = state =>({
    categorie: state.categorie
});

export default connect(mapStateToProps, {getBacklog})(CategoryComponent);
=======
CategoryComponent.propTypes ={
    categorieId: PropTypes.object.isRequired,
    getSingle: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    categorieId: state.categorie.categorieId,
});

export default connect(mapStateToProps, {getSingle}) (CategoryComponent);
>>>>>>> Stashed changes
