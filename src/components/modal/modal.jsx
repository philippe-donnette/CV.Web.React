import React, { Component } from 'react';

class Modal extends Component {
    
    close() {
        console.log('closing');
    }
    
    render() {
        return (
            <div id={this.props.modalId} className="panel-default modal fade" role="dialog" aria-labelledby={this.props.modalLabel}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="panel-heading dn-modal-heading">
                            <div className="row">
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-3 pull-right">
                                    <a className="btn btn-default dn-btn-close" onClick={this.close.bind(this)}><i className="fa fa-close"></i></a>
                                </div>
                                <div className="col-lg-11 col-md-11 col-sm-11 col-xs-9">
                                    <h2><i className={this.props.titleIconClass}></i> {this.props.title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body dn-modal-body">
                            {this.props.children}
                        </div>
                        <div className="panel-footer dn-modal-footer">
                            <div className="row">
                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-3 pull-right">
                                    <a className="btn btn-default dn-btn-close" onClick={this.close.bind(this)}><i className="fa fa-close"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;