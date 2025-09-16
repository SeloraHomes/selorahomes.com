// Scroll indicator hide-on-scroll
(function () {
  const el = document.getElementById('scroll-indicator');
  if (!el) return;
  const toggle = () => {
    if (window.scrollY > 4) {
      el.classList.add('opacity-0', 'pointer-events-none');
    } else {
      el.classList.remove('opacity-0', 'pointer-events-none');
    }
  };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
})();

// Minimal WebGL shader background for hero
(function () {
  const canvas = document.getElementById('hero-shader');
  if (!canvas) return;
  const gl = canvas.getContext('webgl');
  if (!gl) { canvas.remove(); return; }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  function resize() {
    const rect = canvas.getBoundingClientRect();
    const w = Math.floor(rect.width * dpr);
    const h = Math.floor(rect.height * dpr);
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); }
  }
  window.addEventListener('resize', resize);
  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, 'attribute vec2 a; void main(){ gl_Position = vec4(a,0.0,1.0); }');
  gl.compileShader(vs);
  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, 'precision mediump float; uniform vec2 u_res; uniform float u_time; vec2 hash(vec2 p){ p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))); return -1.0+2.0*fract(sin(p)*43758.5453123);} float noise(in vec2 p){ const float K1=0.366025404; const float K2=0.211324865; vec2 i=floor(p+(p.x+p.y)*K1); vec2 a=p-i+(i.x+i.y)*K2; vec2 o=(a.x>a.y)?vec2(1.0,0.0):vec2(0.0,1.0); vec2 b=a-o+K2; vec2 c=a-1.0+2.0*K2; vec3 h=max(0.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.0); vec3 n=h*h*h*h*vec3(dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0))); return dot(n, vec3(70.0)); } void main(){ vec2 uv=gl_FragCoord.xy/u_res; vec2 p=uv-0.5; p.x*=u_res.x/u_res.y; float v=0.0; v += 0.5+0.5*sin((p.x*3.0+p.y*2.0)+u_time*0.15); v *= 0.5+0.5*noise(p*2.5+u_time*0.05); float vig = smoothstep(0.95,0.25,length(p)); float amp = 0.14 * vig; vec3 honey = vec3(251.0/255.0,191.0/255.0,36.0/255.0); vec3 base = vec3(0.0) + honey * 0.04; vec3 col = mix(base, honey, amp*v); gl_FragColor = vec4(col,1.0); }');
  gl.compileShader(fs);
  const prog = gl.createProgram(); gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog); gl.useProgram(prog);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1,  -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uRes = gl.getUniformLocation(prog, 'u_res'); const uTime = gl.getUniformLocation(prog, 'u_time');
  let start = performance.now();
  function frame(){ resize(); gl.uniform2f(uRes, canvas.width, canvas.height); gl.uniform1f(uTime, (performance.now()-start)/1000.0); gl.drawArrays(gl.TRIANGLES, 0, 6); requestAnimationFrame(frame); }
  resize(); frame();
})();