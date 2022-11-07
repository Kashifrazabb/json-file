var sig;

if (navigator.userAgentData.mobile) {
    var main = window.navigator.userAgent.replace(")", "").match("; (.*) Apple")[1]
    sig = `${main}; ${screen.width + screen.height}`
}

else {

    var canvas = document.createElement('canvas');
    var gl;
    var debugInfo;
    var vendor;
    var renderer;

    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }

    if (gl) {
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }

    var main = renderer.match(", (.*) Direct3D11")[1]
    sig = `${main}; ${screen.width + screen.height}`

}


fetch('http://localhost:5000?' + new URLSearchParams({
    site: location.hostname,
    sig: sig
})).then(res => res.text()).then(data => console.log(data))