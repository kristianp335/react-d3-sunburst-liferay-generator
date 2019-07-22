import React from 'react';
import ReactDOM from 'react-dom';
import ChartComponent from './ChartComponent';
import * as d3 from "d3";
import AppComponent from './AppComponent';


/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
    
    ReactDOM.render(
        <ChartComponent
            portletNamespace={portletNamespace} 
            contextPath={contextPath}
            portletElementId={portletElementId}            
            configuration={configuration} 
            id={portletElementId}   
            />, 
        document.getElementById(portletElementId)
    );
}