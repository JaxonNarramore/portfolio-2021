import React, { Component } from 'react';
import './Resume.css'
import { Button } from './Button'
import { Document, Page, pdfjs } from 'react-pdf'
import { Link } from 'react-router-dom'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div className='back'>
                <Link to='/'>
                    <button className='btn btn-outline' >
                        Go Back
                    </button>
                </Link>
                <div className='resume'>
                    <Document
                        file="images/Current-Resume.pdf"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>
            </div>
        );
    }
}

export default Resume