// Higher Order Component (HOC ) - a componenet that render another component
// Reuse code 
// render hijacking
// prop manipulation 
// abstract state 
import React from 'react'; 
import ReactDOM from 'react-dom'; 

const Info =(props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


// requireAuthentatication 
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent  {...props}/>
            ): (
                <p>You are not  logged in</p>
            )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info); 
// const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="there are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are the details" />, document.getElementById('app'));
