import React from 'react';

export function page() {
    return (
        <div className="container pt-4" style={{height:'50vh'}}>
            <div class="card">
                <div class="card-body font-weight-bold text-danger text-uppercase">
                This is page
                </div>
            </div>
        </div>
    )
}

export function shortCodes() {
    return (
        <div className="container pt-4" style={{height:'50vh'}}>
            <div class="card">
                <div class="card-body font-weight-bold text-danger text-uppercase">
                this is shortcode page
                </div>
            </div>
        </div>
    )
}

export function plugins() {
    return (
        <div className="container pt-4" style={{height:'50vh'}}>
            <div class="card">
                <div class="card-body font-weight-bold text-danger text-uppercase">
                this is plugin page
                </div>
            </div>
        </div>
    )
}

export function productList() {
    return (
        <div className="container pt-4" style={{height:'50vh'}}>
            <div class="card">
                <div class="card-body font-weight-bold text-danger text-uppercase">
                this is product page
                </div>
            </div>
        </div>
    )
}

export function onSale() {
    return (
        <div className="container pt-4" style={{height:'50vh'}}>
            <div class="card">
                <div class="card-body font-weight-bold text-danger text-uppercase">
                this is on sale page
                </div>
            </div>
        </div>
    )
}

export function notFound () {
    return <div className="container pt-5" style={{height: '60vh',}}><h1 className="alert alert-secondary">Not found page</h1></div>
  }