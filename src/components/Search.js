import React from 'react';
import '../Search.css';
import axios from 'axios';
import Loader from '../loader.gif';
import PageNavigation from './PageNavigation';
import icon from '../assets/search.svg'
import User from './User';
import Usernav from './Usernav';
import Category from './Category';



class Search extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: [],
			loading: false,
			message: '',
			totalResults: 0,
			totalPages: 0,
			currentPageNo: 0,
		};

		this.cancel = '';
	}


	/**
	 * Get the Total Pages count.
	 *
	 * @param total
	 * @param denominator Count of results per page
	 * @return {number}
	 */
	getPageCount = ( total, denominator ) => {
		const divisible	= 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator ) + valueToBeAdded;
	};

	/**
	 * Fetch the search results and update the state with the result.
	 * Also cancels the previous query before making the new one.
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
	fetchSearchResults = ( updatedPageNo = '', query ) => {
		const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		//const searchUrl = `https://pixabay.com/api/?key=PASTE_YOUR_API_KEY_HERE&q=${query}${pageNumber}`;
		const searchUrl = `https://api.unsplash.com/search/photos/?client_id=JY-4SM6RaS2gIUKelq3y0azFNJX2GA3mJ3DpH1n7qu0&query=${query}${pageNumber}`
		if( this.cancel ) {
			this.cancel.cancel();
		}

		this.cancel = axios.CancelToken.source();

		axios.get( searchUrl, {
			cancelToken: this.cancel.token
		})
			.then( res => {
				const total = res.data.total;
				const totalPagesCount = this.getPageCount( total, 12 );
				const resultNotFoundMsg = ! res.data.results.length
										? 'There are no more search results. Please try a new search'
										: '';
				this.setState( {
					results: res.data.results,
					message: resultNotFoundMsg,
					totalResults: total,
					totalPages: totalPagesCount,
					currentPageNo: updatedPageNo,
					loading: false
				})
			} )
			.catch( error => {
				if ( axios.isCancel(error) || error ) {
					this.setState({
						loading: false,
						message: 'Failed to fetch the data. Please check network',
						
					})
				}
			} )
	};

	handleOnInputChange = ( event ) => {
		const query = event.target.value;
		if ( ! query ) {
			this.setState( { query, results:[], message: '', totalPages: 0, totalResults: 0 } );
		} else {
			this.setState( { query, loading: true, message: '' }, () => {
				this.fetchSearchResults( 1, query );
			} );
		}
	};

	/**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */
	handlePageClick = ( type, event ) => {
		event.preventDefault();
		const updatePageNo = 'prev' === type
			? this.state.currentPageNo - 1
			: this.state.currentPageNo + 1;

		if( ! this.state.loading  ) {
			this.setState( { loading: true, message: '' }, () => {
				this.fetchSearchResults( updatePageNo, this.state.query );
			} );
		}
	};

	renderSearchResults = () => {
		const { results } = this.state;

		if ( Object.keys( results ).length && results.length ) {
			return (
				<div className="results-container">
					{ results.map( result => {
						return (
							<User 
                                img={result.urls.small} />   
						)
					} ) }

				</div>
			)
		}
	};


	render() {
		const { query, loading, message, currentPageNo, totalPages } = this.state;

		const showPrevLink = 1 < currentPageNo;
		const showNextLink = totalPages > currentPageNo;

		return (
			<div className="search-form">
                <div className="home-search flex">
                    <form className=' form-search mt-10 mb-10 w-9/12'>
                    <img src={icon} alt="" className="search-icon mr-6 ml-6" />
                    <input placeholder="Find Something..."
                        type="text"
                        name="query"
                        value={ query }
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange} />
                    <button>Search</button>
                    </form>
                    <Usernav/>
                </div>

            <div className="home-cat">
                <Category/>
            </div>			
        	
			{/*Navigation*/}


			{/*	Result*/}
            <div className="user-comp mt-10  mb-10 flex flex-wrap justify-left">
			    { this.renderSearchResults() }
            </div>
            
			{/*Navigation*/}
			<PageNavigation
				loading={loading}
				showPrevLink={showPrevLink}
				showNextLink={showNextLink}
				handlePrevClick={ (event) => this.handlePageClick('prev', event )}
				handleNextClick={ (event) => this.handlePageClick('next', event )}
			/>

			</div>
		)
	}
}

export default Search
