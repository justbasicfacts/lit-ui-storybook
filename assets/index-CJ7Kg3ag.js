function d(a,t){typeof customElements>"u"||customElements.get(a)||customElements.define(a,t)}const ii=globalThis,so=ii.ShadowRoot&&(ii.ShadyCSS===void 0||ii.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oo=Symbol(),vo=new WeakMap;let Io=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==oo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(so&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=vo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&vo.set(e,t))}return t}toString(){return this.cssText}};const ti=a=>new Io(typeof a=="string"?a:a+"",void 0,oo),h=(a,...t)=>{const e=a.length===1?a[0]:t.reduce((i,s,r)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[r+1],a[0]);return new Io(e,a,oo)},Fo=(a,t)=>{if(so)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=ii.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,a.appendChild(i)}},yo=so?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ti(e)})(a):a;const{is:Wo,defineProperty:Ko,getOwnPropertyDescriptor:Xo,getOwnPropertyNames:Yo,getOwnPropertySymbols:Go,getPrototypeOf:Zo}=Object,Zs=globalThis,xo=Zs.trustedTypes,Jo=xo?xo.emptyScript:"",Qo=Zs.reactiveElementPolyfillSupport,P=(a,t)=>a,eo={toAttribute(a,t){switch(t){case Boolean:a=a?Jo:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},To=(a,t)=>!Wo(a,t),wo={attribute:!0,type:String,converter:eo,reflect:!1,useDefault:!1,hasChanged:To};Symbol.metadata??=Symbol("metadata"),Zs.litPropertyMetadata??=new WeakMap;let M=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wo){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ko(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Xo(this.prototype,t)??{get(){return this[e]},set(c){this[e]=c}};return{get:s,set(c){const u=s?.call(this);r?.call(this,c),this.requestUpdate(t,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wo}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Zo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,i=[...Yo(e),...Go(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(yo(s))}else t!==void 0&&e.push(yo(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:eo).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:eo;this._$Em=s;const u=c.fromAttribute(e,r.type);this[s]=u??this._$Ej?.get(s)??u,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(t!==void 0){const c=this.constructor;if(s===!1&&(r=this[t]),i??=c.getPropertyOptions(t),!((i.hasChanged??To)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??e??this[t]),r!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:c}=r,u=this[s];c!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,r,u)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[P("elementProperties")]=new Map,M[P("finalized")]=new Map,Qo?.({ReactiveElement:M}),(Zs.reactiveElementVersions??=[]).push("2.1.2");const ro=globalThis,ko=a=>a,si=ro.trustedTypes,_o=si?si.createPolicy("lit-html",{createHTML:a=>a}):void 0,Po="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Lo="?"+$,Uo=`<${Lo}>`,E=document,F=()=>E.createComment(""),W=a=>a===null||typeof a!="object"&&typeof a!="function",ao=Array.isArray,tr=a=>ao(a)||typeof a?.[Symbol.iterator]=="function",Us=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$o=/-->/g,So=/>/g,S=RegExp(`>|${Us}(?:([^\\s"'>=/]+)(${Us}*=${Us}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Co=/'/g,Eo=/"/g,Ro=/^(?:script|style|textarea|title)$/i,er=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),o=er(1),A=Symbol.for("lit-noChange"),n=Symbol.for("lit-nothing"),zo=new WeakMap,C=E.createTreeWalker(E,129);function Oo(a,t){if(!ao(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return _o!==void 0?_o.createHTML(t):t}const ir=(a,t)=>{const e=a.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",c=T;for(let u=0;u<e;u++){const f=a[u];let m,b,g=-1,k=0;for(;k<f.length&&(c.lastIndex=k,b=c.exec(f),b!==null);)k=c.lastIndex,c===T?b[1]==="!--"?c=$o:b[1]!==void 0?c=So:b[2]!==void 0?(Ro.test(b[2])&&(s=RegExp("</"+b[2],"g")),c=S):b[3]!==void 0&&(c=S):c===S?b[0]===">"?(c=s??T,g=-1):b[1]===void 0?g=-2:(g=c.lastIndex-b[2].length,m=b[1],c=b[3]===void 0?S:b[3]==='"'?Eo:Co):c===Eo||c===Co?c=S:c===$o||c===So?c=T:(c=S,s=void 0);const v=c===S&&a[u+1].startsWith("/>")?" ":"";r+=c===T?f+Uo:g>=0?(i.push(m),f.slice(0,g)+Po+f.slice(g)+$+v):f+$+(g===-2?u:v)}return[Oo(a,r+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,c=0;const u=t.length-1,f=this.parts,[m,b]=ir(t,e);if(this.el=K.createElement(m,i),C.currentNode=this.el.content,e===2||e===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=C.nextNode())!==null&&f.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith(Po)){const k=b[c++],v=s.getAttribute(g).split($),y=/([.?@])?(.*)/.exec(k);f.push({type:1,index:r,name:y[2],strings:v,ctor:y[1]==="."?or:y[1]==="?"?rr:y[1]==="@"?ar:Js}),s.removeAttribute(g)}else g.startsWith($)&&(f.push({type:6,index:r}),s.removeAttribute(g));if(Ro.test(s.tagName)){const g=s.textContent.split($),k=g.length-1;if(k>0){s.textContent=si?si.emptyScript:"";for(let v=0;v<k;v++)s.append(g[v],F()),C.nextNode(),f.push({type:2,index:++r});s.append(g[k],F())}}}else if(s.nodeType===8)if(s.data===Lo)f.push({type:2,index:r});else{let g=-1;for(;(g=s.data.indexOf($,g+1))!==-1;)f.push({type:7,index:r}),g+=$.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function B(a,t,e=a,i){if(t===A)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const r=W(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(a),s._$AT(a,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=B(a,s._$AS(a,t.values),s,i)),t}class sr{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??E).importNode(e,!0);C.currentNode=s;let r=C.nextNode(),c=0,u=0,f=i[0];for(;f!==void 0;){if(c===f.index){let m;f.type===2?m=new ei(r,r.nextSibling,this,t):f.type===1?m=new f.ctor(r,f.name,f.strings,this,t):f.type===6&&(m=new nr(r,this,t)),this._$AV.push(m),f=i[++u]}c!==f?.index&&(r=C.nextNode(),c++)}return C.currentNode=E,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ei{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=n,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),W(t)?t===n||t==null||t===""?(this._$AH!==n&&this._$AR(),this._$AH=n):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==n&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=K.createElement(Oo(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const r=new sr(s,this),c=r.u(this.options);r.p(e),this.T(c),this._$AH=r}}_$AC(t){let e=zo.get(t.strings);return e===void 0&&zo.set(t.strings,e=new K(t)),e}k(t){ao(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new ei(this.O(F()),this.O(F()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=ko(t).nextSibling;ko(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Js{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=n,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=n}_$AI(t,e=this,i,s){const r=this.strings;let c=!1;if(r===void 0)t=B(this,t,e,0),c=!W(t)||t!==this._$AH&&t!==A,c&&(this._$AH=t);else{const u=t;let f,m;for(t=r[0],f=0;f<r.length-1;f++)m=B(this,u[i+f],e,f),m===A&&(m=this._$AH[f]),c||=!W(m)||m!==this._$AH[f],m===n?t=n:t!==n&&(t+=(m??"")+r[f+1]),this._$AH[f]=m}c&&!s&&this.j(t)}j(t){t===n?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class or extends Js{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===n?void 0:t}}class rr extends Js{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==n)}}class ar extends Js{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??n)===A)return;const i=this._$AH,s=t===n&&i!==n||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==n&&(i===n||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nr{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const lr=ro.litHtmlPolyfillSupport;lr?.(K,ei),(ro.litHtmlVersions??=[]).push("3.3.3");const cr=(a,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const r=e?.renderBefore??null;i._$litPart$=s=new ei(t.insertBefore(F(),r),r,void 0,e??{})}return s._$AI(a),s};const no=globalThis;let l=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=cr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};l._$litElement$=!0,l.finalized=!0,no.litElementHydrateSupport?.({LitElement:l});const dr=no.litElementPolyfillSupport;dr?.({LitElement:l});(no.litElementVersions??=[]).push("4.2.2");const p=h`
  :host {
    box-sizing: border-box;
    font-family: var(
      --ui-font,
      'Roboto Condensed',
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      Arial,
      sans-serif
    );
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }
`,oi=class oi extends l{constructor(){super(...arguments),this.variant="primary",this.size="md",this.shape="default",this.textTransform="uppercase",this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.type="button",this.href="",this.target="",this.rel="",this._onClick=t=>{this.href&&(this.disabled||this.loading)&&t.preventDefault()}}_content(){return o`${this.loading?o`<span part="spinner" class="spinner" aria-hidden="true"></span>`:n}<slot></slot>`}render(){return this.href?o`
        <a
          class="button"
          part="button"
          href=${this.href}
          target=${this.target||n}
          rel=${this.rel||n}
          aria-disabled=${this.disabled||this.loading?"true":n}
          @click=${this._onClick}
          >${this._content()}</a
        >
      `:o`
      <button
        class="button"
        part="button"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-busy=${this.loading?"true":"false"}
      >
        ${this._content()}
      </button>
    `}};oi.properties={variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},textTransform:{type:String,attribute:"text-transform",reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},fullWidth:{type:Boolean,attribute:"full-width",reflect:!0},type:{type:String,reflect:!0},href:{type:String},target:{type:String},rel:{type:String}},oi.styles=[p,h`
      :host {
        display: inline-block;
      }
      :host([full-width]) {
        display: block;
        width: 100%;
      }
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        font-family: inherit;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.02em;
        text-transform: var(--ui-button-text-transform, uppercase);
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: var(--ui-radius, 4px);
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 120ms ease, border-color 120ms ease,
          color 120ms ease, opacity 120ms ease;
      }
      :host([shape='pill']) .button {
        border-radius: 999px;
      }
      :host([text-transform='none']) .button {
        text-transform: none;
        letter-spacing: 0.01em;
      }
      .button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([disabled]) .button,
      :host([loading]) .button {
        cursor: not-allowed;
        opacity: 0.5;
      }
      /* Each size fixes a min-height so a button carrying an icon (the icon is
         taller than the text line) matches one without. The value is the height
         of the same size with a default small icon: padding x2 + 20px icon +
         2px border. */
      :host([size='sm']) .button {
        padding: 5px 10px;
        font-size: 12px;
        min-height: 32px;
      }
      :host([size='md']) .button {
        padding: 8px 16px;
        font-size: 13px;
        min-height: 38px;
      }
      :host([size='lg']) .button {
        padding: 11px 22px;
        font-size: 15px;
        min-height: 44px;
      }

      :host([variant='primary']) .button {
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([variant='primary']) .button:hover:not([disabled]) {
        background: var(--ui-color-primary-hover, #1565c0);
      }
      :host([variant='secondary']) .button {
        /* Two declarations on purpose: the flat tint is the fallback, the
           color-mix version follows whatever primary the theme sets. */
        background: rgba(25, 118, 210, 0.08);
        background: color-mix(
          in srgb,
          var(--ui-color-primary, #1976d2) 8%,
          transparent
        );
        color: var(--ui-color-primary, #1976d2);
      }
      :host([variant='secondary']) .button:hover:not([disabled]) {
        background: rgba(25, 118, 210, 0.16);
        background: color-mix(
          in srgb,
          var(--ui-color-primary, #1976d2) 16%,
          transparent
        );
      }
      :host([variant='outline']) .button {
        background: transparent;
        border-color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([variant='outline']) .button:hover:not([disabled]) {
        border-color: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary, #1976d2);
      }
      :host([variant='ghost']) .button {
        background: transparent;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([variant='ghost']) .button:hover:not([disabled]) {
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.04));
      }
      :host([variant='error']) .button {
        background: var(--ui-color-error, #d32f2f);
        color: var(--ui-color-error-contrast, #fff);
      }
      :host([variant='error']) .button:hover:not([disabled]) {
        background: var(--ui-color-error-dark, #c62828);
      }

      .spinner {
        width: 1em;
        height: 1em;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: ui-spin 700ms linear infinite;
      }
      @keyframes ui-spin {
        to {
          transform: rotate(360deg);
        }
      }
    `];let X=oi;d("ui-button",X);X.__docgenInfo={description:"",methods:[],displayName:"UiButton"};const w={fromAttribute:a=>a??"",toAttribute:a=>a||null};let hr=0;const L=class L extends l{constructor(){super(...arguments),this.label="",this.value="",this.placeholder="",this.type="text",this.name="",this.disabled=!1,this.required=!1,this.autocomplete="",this.error="",this.helperText="",this.internals=this.attachInternals(),this._inputId=`ui-input-${hr++}`}get _input(){return this.renderRoot.querySelector("input")}focus(t){this._input?.focus(t)}blur(){this._input?.blur()}select(){this._input?.select()}updated(t){if(t.has("value")){const e=this._input;e&&e.value!==this.value&&(e.value=this.value,this.internals.setFormValue(this.value))}}_onInput(t){const e=t.target.value;this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent("input",{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!0,composed:!0}))}render(){return o`
      ${this.label?o`<label class="field" for=${this._inputId}>${this.label}</label>`:n}
      <input
        id=${this._inputId}
        part="input"
        type=${this.type}
        .value=${this.value}
        placeholder=${this.placeholder||n}
        ?disabled=${this.disabled}
        ?required=${this.required}
        name=${this.name||n}
        autocomplete=${this.autocomplete||n}
        aria-invalid=${this.error?"true":"false"}
        class=${this.error?"has-error":""}
        @input=${this._onInput}
      />
      ${this.error?o`<div class="error" role="alert">${this.error}</div>`:n}
      ${!this.error&&this.helperText?o`<div class="helper">${this.helperText}</div>`:n}
    `}};L.formAssociated=!0,L.properties={label:{type:String},value:{type:String},placeholder:{type:String},type:{type:String},name:{type:String,reflect:!0,converter:w},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},autocomplete:{type:String},error:{type:String},helperText:{type:String,attribute:"helper-text"}},L.styles=[p,h`
      :host {
        display: block;
      }
      label.field {
        display: block;
        font-size: 13px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        margin-bottom: 4px;
      }
      input {
        box-sizing: border-box;
        width: 100%;
        font-family: inherit;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        border-radius: var(--ui-radius, 4px);
        padding: 10px 12px;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }
      input:focus {
        outline: none;
        border-color: var(--ui-color-primary, #1976d2);
        box-shadow: 0 0 0 1px var(--ui-color-primary, #1976d2);
      }
      input.has-error {
        border-color: var(--ui-color-error, #d32f2f);
      }
      :host([disabled]) input {
        background: var(--ui-color-bg-muted, #fafafa);
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
      .error {
        color: var(--ui-color-error, #d32f2f);
        font-size: 12px;
        margin-top: 4px;
      }
      .helper {
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        font-size: 12px;
        margin-top: 4px;
      }
    `];let Y=L;d("ui-input",Y);Y.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[{name:"options",optional:!0,type:{name:"FocusOptions",alias:"FocusOptions"}}],returns:{type:{name:"void"}}},{name:"blur",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"select",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiInput"};const N=class N extends l{constructor(){super(...arguments),this.padding="",this.elevated=!1}connectedCallback(){super.connectedCallback(),this._parts=new MutationObserver(()=>this._syncParts()),this._parts.observe(this,{childList:!0}),this._syncParts()}disconnectedCallback(){this._parts?.disconnect(),this._parts=void 0,super.disconnectedCallback()}_syncParts(){const t=[...this.children].some(e=>N.PARTS.includes(e.tagName));this.toggleAttribute("has-parts",t)}render(){return o`
      <slot name="header"></slot>
      <div class="body" part="body"><slot></slot></div>
      <slot name="footer"></slot>
    `}};N.properties={padding:{type:String,reflect:!0,converter:w},elevated:{type:Boolean,reflect:!0}},N.PARTS=["UI-CARD-HEADER","UI-CARD-CONTENT","UI-CARD-ACTIONS","UI-CARD-MEDIA"],N.styles=[p,h`
      :host {
        display: block;
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        border-radius: var(--ui-radius, 4px);
        overflow: hidden;
      }
      :host([elevated]) {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        border-color: transparent;
      }
      ::slotted([slot='header']) {
        margin: 0;
        padding: 16px 16px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      ::slotted([slot='footer']) {
        margin: 0;
        padding: 0 16px 16px;
      }
      .body {
        padding: var(--ui-card-padding-top, var(--ui-card-padding, 16px))
          var(--ui-card-padding-right, var(--ui-card-padding, 16px))
          var(--ui-card-padding-bottom, var(--ui-card-padding, 16px))
          var(--ui-card-padding-left, var(--ui-card-padding, 16px));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      /* Declaration order is the precedence: a part removes the default pad, an
         explicit padding puts it back. */
      :host([has-parts]) .body {
        --ui-card-padding: 0;
      }
      :host([padding='none']) .body {
        --ui-card-padding: 0;
      }
      :host([padding='sm']) .body {
        --ui-card-padding: 8px;
      }
      :host([padding='md']) .body {
        --ui-card-padding: 16px;
      }
      :host([padding='lg']) .body {
        --ui-card-padding: 24px;
      }
    `];let G=N;d("ui-card",G);G.__docgenInfo={description:"",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiCard"};const ri=class ri extends l{constructor(){super(...arguments),this.variant="default",this.pill=!1}render(){return o`<slot></slot>`}};ri.properties={variant:{type:String,reflect:!0},pill:{type:Boolean,reflect:!0}},ri.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
        padding: 4px 10px;
        border-radius: var(--ui-radius, 4px);
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.04));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        border: 1px solid transparent;
      }
      :host([pill]) {
        border-radius: 999px;
      }
      :host([variant='primary']) {
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([variant='secondary']) {
        background: var(--ui-color-secondary, #9c27b0);
        color: #fff;
      }
      :host([variant='success']) {
        background: rgba(46, 125, 50, 0.12);
        color: var(--ui-color-success, #2e7d32);
      }
      :host([variant='warning']) {
        background: rgba(237, 108, 2, 0.12);
        color: var(--ui-color-warning, #ed6c02);
      }
      :host([variant='error']) {
        background: rgba(211, 47, 47, 0.12);
        color: var(--ui-color-error, #d32f2f);
      }
      :host([variant='info']) {
        background: rgba(2, 136, 209, 0.12);
        color: var(--ui-color-info, #0288d1);
      }
    `];let Z=ri;d("ui-badge",Z);Z.__docgenInfo={description:"",methods:[],displayName:"UiBadge"};const R=class R extends l{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.name="",this.label="",this.internals=this.attachInternals()}_onChange(t){const e=t.target;this.checked=e.checked,this.indeterminate=e.indeterminate,this.internals.setFormValue(this.checked?this.value:null),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}updated(t){(t.has("checked")||t.has("value"))&&this.internals.setFormValue(this.checked?this.value:null)}render(){return o`
      <label part="label">
        <input
          type="checkbox"
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.disabled}
          name=${this.name||n}
          value=${this.value}
          @change=${this._onChange}
        />
        <span class="box" part="box" aria-hidden="true">
          ${this.indeterminate?o`<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>`:this.checked?o`<svg viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`:n}
        </span>
        ${this.label?o`<span class="label" part="text">${this.label}</span>`:o`<slot></slot>`}
      </label>
    `}};R.formAssociated=!0,R.properties={checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},value:{type:String},name:{type:String,reflect:!0,converter:w},label:{type:String}},R.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        vertical-align: middle;
      }
      label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      :host([disabled]) label {
        cursor: not-allowed;
      }
      input {
        position: absolute;
        opacity: 0;
        width: 1px;
        height: 1px;
      }
      .box {
        width: 18px;
        height: 18px;
        flex: none;
        border-radius: 2px;
        border: 2px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--ui-color-primary-contrast, #fff);
        transition: background-color 120ms ease, border-color 120ms ease;
      }
      .box svg {
        width: 14px;
        height: 14px;
        fill: currentColor;
        display: block;
      }
      :host([checked]) .box,
      :host([indeterminate]) .box {
        background: var(--ui-color-primary, #1976d2);
        border-color: var(--ui-color-primary, #1976d2);
      }
      :host([disabled]) .box {
        border-color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
      :host([disabled][checked]) .box,
      :host([disabled][indeterminate]) .box {
        background: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        border-color: transparent;
      }
      input:focus-visible + .box {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .label {
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
    `];let J=R;d("ui-checkbox",J);J.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiCheckbox"};const ai=class ai extends l{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.value="",this.label=""}_onChange(){this.disabled||(this.checked=!0,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){return o`
      <label part="label">
        <input
          type="radio"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._onChange}
        />
        <span class="dot" part="dot" aria-hidden="true"></span>
        <span class="label">${this.label}<slot></slot></span>
      </label>
    `}};ai.properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},value:{type:String},label:{type:String}},ai.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
      }
      label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
      input {
        position: absolute;
        opacity: 0;
        width: 1px;
        height: 1px;
      }
      .dot {
        width: 18px;
        height: 18px;
        flex: none;
        border-radius: 50%;
        border: 2px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: border-color 120ms ease;
      }
      .dot::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--ui-color-primary, #1976d2);
        transform: scale(0);
        transition: transform 120ms ease;
      }
      :host([checked]) .dot {
        border-color: var(--ui-color-primary, #1976d2);
      }
      :host([checked]) .dot::after {
        transform: scale(1);
      }
      input:focus-visible + .dot {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .label {
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
    `];let I=ai;d("ui-radio",I);I.__docgenInfo={description:"",methods:[],displayName:"UiRadio"};const O=class O extends l{constructor(){super(),this.value="",this.name="",this.label="",this.disabled=!1,this.orientation="vertical",this.internals=this.attachInternals(),this.addEventListener("change",this._onRadioChange)}_onRadioChange(t){if(t.target?.tagName?.toLowerCase()!=="ui-radio")return;const i=t.detail;this.value=i?.value??"",this.internals.setFormValue(this.value),this._syncRadios()}_syncRadios(){for(const t of Array.from(this.querySelectorAll("ui-radio")))t instanceof I&&(t.checked=t.value===this.value,t.disabled=this.disabled)}updated(t){t.has("value")&&(this._syncRadios(),this.internals.setFormValue(this.value)),t.has("disabled")&&this._syncRadios()}render(){return o`
      ${this.label?o`<div class="label" part="label">${this.label}</div>`:n}
      <div class="group" role="radiogroup" part="group"><slot></slot></div>
    `}};O.formAssociated=!0,O.properties={value:{type:String},name:{type:String,reflect:!0,converter:w},label:{type:String},disabled:{type:Boolean,reflect:!0},orientation:{type:String,reflect:!0}},O.styles=[p,h`
      :host {
        display: block;
      }
      .label {
        display: block;
        font-size: 13px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        margin-bottom: 6px;
      }
      .group {
        display: flex;
        gap: 12px;
      }
      :host([orientation='horizontal']) .group {
        flex-direction: row;
      }
      :host([orientation='vertical']) .group {
        flex-direction: column;
      }
    `];let Q=O;d("ui-radio-group",Q);Q.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiRadioGroup"};const D=class D extends l{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.value="on",this.name="",this.label="",this.internals=this.attachInternals()}_onChange(t){this.checked=t.target.checked,this.internals.setFormValue(this.checked?this.value:null),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}updated(t){(t.has("checked")||t.has("value"))&&this.internals.setFormValue(this.checked?this.value:null)}render(){return o`
      <label part="label">
        <input
          type="checkbox"
          role="switch"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          name=${this.name||n}
          value=${this.value}
          @change=${this._onChange}
        />
        <span class="track" part="track" aria-hidden="true">
          <span class="thumb" part="thumb"></span>
        </span>
        ${this.label?o`<span class="label" part="text">${this.label}</span>`:o`<slot></slot>`}
      </label>
    `}};D.formAssociated=!0,D.properties={checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},value:{type:String},name:{type:String,reflect:!0,converter:w},label:{type:String}},D.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        vertical-align: middle;
      }
      label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
      input {
        position: absolute;
        opacity: 0;
        width: 1px;
        height: 1px;
      }
      .track {
        position: relative;
        width: 38px;
        height: 22px;
        flex: none;
        border-radius: 999px;
        background: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        transition: background-color 120ms ease;
      }
      .thumb {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        transition: transform 120ms ease;
      }
      :host([checked]) .track {
        background: var(--ui-color-primary, #1976d2);
      }
      :host([checked]) .thumb {
        transform: translateX(16px);
      }
      input:focus-visible + .track {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .label {
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
    `];let U=D;d("ui-switch",U);U.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiSwitch"};const j=class j extends l{constructor(){super(...arguments),this.options=[],this.value="",this.label="",this.placeholder="",this.disabled=!1,this.required=!1,this.name="",this.error="",this.helperText="",this.internals=this.attachInternals()}get _select(){return this.renderRoot.querySelector("select")}get _normalized(){return(this.options??[]).map(t=>typeof t=="string"?{value:t,label:t}:t)}_onChange(t){const e=t.target.value;this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!0,composed:!0}))}updated(t){if(t.has("value")){const e=this._select;e&&e.value!==this.value&&(e.value=this.value,this.internals.setFormValue(this.value))}}render(){return o`
      ${this.label?o`<label class="field">${this.label}</label>`:n}
      <select
        part="select"
        ?disabled=${this.disabled}
        ?required=${this.required}
        name=${this.name||n}
        aria-invalid=${this.error?"true":"false"}
        class=${this.error?"has-error":""}
        @change=${this._onChange}
      >
        ${this.placeholder?o`<option value="" ?disabled=${this.required}>${this.placeholder}</option>`:n}
        ${this._normalized.map(t=>o`<option value=${t.value} ?disabled=${t.disabled??!1}>${t.label}</option>`)}
      </select>
      ${this.error?o`<div class="error" role="alert">${this.error}</div>`:n}
      ${!this.error&&this.helperText?o`<div class="helper">${this.helperText}</div>`:n}
    `}};j.formAssociated=!0,j.properties={options:{type:Array},value:{type:String},label:{type:String},placeholder:{type:String},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},name:{type:String,reflect:!0,converter:w},error:{type:String},helperText:{type:String,attribute:"helper-text"}},j.styles=[p,h`
      :host {
        display: block;
      }
      label.field {
        display: block;
        font-size: 13px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        margin-bottom: 4px;
      }
      select {
        box-sizing: border-box;
        width: 100%;
        font-family: inherit;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        border-radius: var(--ui-radius, 4px);
        padding: 10px 12px;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,0.54)' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
        padding-right: 32px;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }
      select:focus {
        outline: none;
        border-color: var(--ui-color-primary, #1976d2);
        box-shadow: 0 0 0 1px var(--ui-color-primary, #1976d2);
      }
      select.has-error {
        border-color: var(--ui-color-error, #d32f2f);
      }
      :host([disabled]) select {
        background-color: var(--ui-color-bg-muted, #fafafa);
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
      .error {
        color: var(--ui-color-error, #d32f2f);
        font-size: 12px;
        margin-top: 4px;
      }
      .helper {
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        font-size: 12px;
        margin-top: 4px;
      }
    `];let tt=j;d("ui-select",tt);tt.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiSelect"};let pr=0;const q=class q extends l{constructor(){super(...arguments),this.label="",this.value="",this.placeholder="",this.rows=4,this.name="",this.disabled=!1,this.required=!1,this.error="",this.helperText="",this.internals=this.attachInternals(),this._textareaId=`ui-textarea-${pr++}`}get _textarea(){return this.renderRoot.querySelector("textarea")}focus(t){this._textarea?.focus(t)}updated(t){if(t.has("value")){const e=this._textarea;e&&e.value!==this.value&&(e.value=this.value,this.internals.setFormValue(this.value))}}_onInput(t){const e=t.target.value;this.value=e,this.internals.setFormValue(e),this.dispatchEvent(new CustomEvent("input",{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!0,composed:!0}))}render(){return o`
      ${this.label?o`<label class="field" for=${this._textareaId}>${this.label}</label>`:n}
      <textarea
        id=${this._textareaId}
        part="textarea"
        rows=${this.rows}
        .value=${this.value}
        placeholder=${this.placeholder||n}
        ?disabled=${this.disabled}
        ?required=${this.required}
        name=${this.name||n}
        aria-invalid=${this.error?"true":"false"}
        class=${this.error?"has-error":""}
        @input=${this._onInput}
      ></textarea>
      ${this.error?o`<div class="error" role="alert">${this.error}</div>`:n}
      ${!this.error&&this.helperText?o`<div class="helper">${this.helperText}</div>`:n}
    `}};q.formAssociated=!0,q.properties={label:{type:String},value:{type:String},placeholder:{type:String},rows:{type:Number},name:{type:String,reflect:!0,converter:w},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},error:{type:String},helperText:{type:String,attribute:"helper-text"}},q.styles=[p,h`
      :host {
        display: block;
      }
      label.field {
        display: block;
        font-size: 13px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        margin-bottom: 4px;
      }
      textarea {
        box-sizing: border-box;
        width: 100%;
        font-family: inherit;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        border-radius: var(--ui-radius, 4px);
        padding: 10px 12px;
        resize: vertical;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }
      textarea:focus {
        outline: none;
        border-color: var(--ui-color-primary, #1976d2);
        box-shadow: 0 0 0 1px var(--ui-color-primary, #1976d2);
      }
      textarea.has-error {
        border-color: var(--ui-color-error, #d32f2f);
      }
      :host([disabled]) textarea {
        background: var(--ui-color-bg-muted, #fafafa);
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
      .error {
        color: var(--ui-color-error, #d32f2f);
        font-size: 12px;
        margin-top: 4px;
      }
      .helper {
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        font-size: 12px;
        margin-top: 4px;
      }
    `];let et=q;d("ui-textarea",et);et.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[{name:"options",optional:!0,type:{name:"FocusOptions",alias:"FocusOptions"}}],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiTextarea"};const lo={primary:"var(--ui-color-primary, #1976d2)","primary.light":"var(--ui-color-primary-light, #42a5f5)","primary.dark":"var(--ui-color-primary-hover, #1565c0)","primary.contrastText":"var(--ui-color-primary-contrast, #ffffff)",secondary:"var(--ui-color-secondary, #9c27b0)","secondary.dark":"var(--ui-color-secondary-dark, #7b1fa2)",error:"var(--ui-color-error, #d32f2f)",warning:"var(--ui-color-warning, #ed6c02)",info:"var(--ui-color-info, #0288d1)",success:"var(--ui-color-success, #2e7d32)",text:"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.primary":"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.secondary":"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))","text.disabled":"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))","background.paper":"var(--ui-color-bg-paper, #ffffff)","background.default":"var(--ui-color-bg-default, #ffffff)",divider:"var(--ui-color-divider, rgba(0, 0, 0, 0.12))","action.hover":"var(--ui-color-action-hover, rgba(0, 0, 0, 0.04))","action.selected":"var(--ui-color-action-selected, rgba(0, 0, 0, 0.08))","action.disabled":"var(--ui-color-action-disabled, rgba(0, 0, 0, 0.26))","action.focus":"var(--ui-color-action-focus, rgba(0, 0, 0, 0.12))",backdrop:"var(--ui-color-backdrop, rgba(0, 0, 0, 0.5))",inherit:"inherit",transparent:"transparent",currentColor:"currentColor"};function _(a){return lo[a]??a}const ur={primary:"var(--ui-color-primary-contrast, #fff)",secondary:"var(--ui-color-secondary-contrast, #fff)",error:"var(--ui-color-error-contrast, #fff)",warning:"var(--ui-color-warning-contrast, #fff)",info:"var(--ui-color-info-contrast, #fff)",success:"var(--ui-color-success-contrast, #fff)"},ni=class ni extends l{constructor(){super(...arguments),this.src="",this.alt="",this.initials="",this.size=40,this.variant="circular",this.color=""}render(){const t=this.color?ur[this.color]??"#fff":"",e=`width:${this.size}px;height:${this.size}px;font-size:${Math.round(this.size*.4)}px;${this.color?`background:${_(this.color)};`:""}${t?`color:${t};`:""}`;return o`
      <div class="avatar" part="avatar" style=${e}>
        ${this.src?o`<img src=${this.src} alt=${this.alt} part="img" />`:o`<span class="initials" part="initials"
              >${this.initials||o`<slot></slot>`}</span
            >`}
      </div>
    `}};ni.properties={src:{type:String},alt:{type:String},initials:{type:String},size:{type:Number},variant:{type:String,reflect:!0},color:{type:String}},ni.styles=[p,h`
      :host {
        display: inline-flex;
        flex: none;
        vertical-align: middle;
      }
      .avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--ui-color-secondary, #9c27b0);
        color: var(--ui-color-secondary-contrast, #fff);
        font-weight: 500;
        user-select: none;
      }
      :host([variant='circular']) .avatar {
        border-radius: 50%;
      }
      :host([variant='rounded']) .avatar {
        border-radius: var(--ui-radius, 4px);
      }
      :host([variant='square']) .avatar {
        border-radius: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .initials {
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
    `];let it=ni;d("ui-avatar",it);it.__docgenInfo={description:"",methods:[],displayName:"UiAvatar"};const li=class li extends l{constructor(){super(...arguments),this.label="",this.variant="filled",this.color="default",this.disabled=!1,this.deletable=!1,this.clickable=!1,this.nowrap=!1}_onDelete(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("delete",{detail:this.label,bubbles:!0,composed:!0}))}render(){return o`
      <span class="chip" part="chip">
        <slot name="icon"></slot>
        <span part="label">${this.label}<slot></slot></span>
        ${this.deletable?o`<button
              class="delete"
              part="delete"
              aria-label=${`Remove ${this.label}`}
              @click=${this._onDelete}
            >
              &times;
            </button>`:""}
      </span>
    `}};li.properties={label:{type:String},variant:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},deletable:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0},nowrap:{type:Boolean,reflect:!0}},li.styles=[p,h`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: inherit;
        font-size: 13px;
        line-height: 1.4;
        padding: 5px 12px;
        border-radius: 16px;
        border: 1px solid transparent;
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.04));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([clickable]) .chip {
        cursor: pointer;
      }
      :host([disabled]) .chip {
        opacity: 0.5;
        pointer-events: none;
      }

      :host([color='primary']) .chip {
        --chip: var(--ui-color-primary, #1976d2);
      }
      :host([color='secondary']) .chip {
        --chip: var(--ui-color-secondary, #9c27b0);
      }
      :host([color='success']) .chip {
        --chip: var(--ui-color-success, #2e7d32);
      }
      :host([color='warning']) .chip {
        --chip: var(--ui-color-warning, #ed6c02);
      }
      :host([color='error']) .chip {
        --chip: var(--ui-color-error, #d32f2f);
      }
      :host([color='info']) .chip {
        --chip: var(--ui-color-info, #0288d1);
      }

      :host([color]:not([color='default']))[variant='filled'] .chip {
        background: var(--chip);
        color: #fff;
      }
      :host([color]:not([color='default']))[variant='outlined'] .chip {
        background: transparent;
        border-color: var(--chip);
        color: var(--chip);
      }
      :host([variant='outlined'])[color='default'] .chip {
        background: transparent;
        border-color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([nowrap]) .chip {
        white-space: nowrap;
      }

      .delete {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        padding: 0;
        margin: 0 -4px 0 2px;
        font-size: 18px;
        line-height: 1;
        cursor: pointer;
        color: inherit;
        opacity: 0.6;
      }
      .delete:hover {
        opacity: 1;
      }
    `];let st=li;d("ui-chip",st);st.__docgenInfo={description:"",methods:[],displayName:"UiChip"};const ci=class ci extends l{constructor(){super(...arguments),this.orientation="horizontal",this.inset=!1}render(){return o`<slot></slot>`}};ci.properties={orientation:{type:String,reflect:!0},inset:{type:Boolean,reflect:!0}},ci.styles=[p,h`
      :host {
        display: block;
        background: var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      :host([orientation='horizontal']) {
        width: 100%;
        height: 1px;
      }
      :host([orientation='vertical']) {
        width: 1px;
        height: 100%;
        align-self: stretch;
      }
      :host([orientation='horizontal'][inset]) {
        margin-left: 72px;
        width: calc(100% - 72px);
      }
    `];let ot=ci;d("ui-divider",ot);ot.__docgenInfo={description:"",methods:[],displayName:"UiDivider"};const di=class di extends l{constructor(){super(...arguments),this.content="",this.position="top",this._onClick=t=>{t.detail!==0&&this.toggleAttribute("activated",!0)},this._clearWhenIdle=()=>{this.matches(":hover")||this.matches(":focus-within")||this.removeAttribute("activated")}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseleave",this._clearWhenIdle),this.addEventListener("focusout",this._clearWhenIdle)}disconnectedCallback(){this.removeEventListener("mouseleave",this._clearWhenIdle),this.removeEventListener("focusout",this._clearWhenIdle),super.disconnectedCallback()}render(){return o`
      <slot @click=${this._onClick}></slot>
      <span class="tip" role="tooltip" part="tooltip">${this.content}</span>
    `}};di.properties={content:{type:String},position:{type:String,reflect:!0}},di.styles=[p,h`
      :host {
        display: inline-flex;
        position: relative;
      }
      .tip {
        position: absolute;
        z-index: 1200;
        background: rgba(97, 97, 97, 0.92);
        color: #fff;
        font-family: inherit;
        font-size: 12px;
        line-height: 1.3;
        padding: 4px 8px;
        border-radius: var(--ui-radius, 4px);
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms ease;
      }
      :host(:hover) .tip,
      :host(:focus-within) .tip {
        opacity: 1;
      }
      /*
       * A pointer click leaves the button focused, and :focus-within alone keeps
       * the tip open, so it would sit there until something else was clicked.
       * Once activated, stay muted until the pointer leaves, like a native
       * tooltip. Keyboard activation never sets this.
       */
      :host([activated]) .tip {
        opacity: 0;
      }
      :host([position='top']) .tip {
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      }
      :host([position='bottom']) .tip {
        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      }
      :host([position='left']) .tip {
        right: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      }
      :host([position='right']) .tip {
        left: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      }
    `];let rt=di;d("ui-tooltip",rt);rt.__docgenInfo={description:"",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiTooltip"};const hi=class hi extends l{constructor(){super(...arguments),this.value=0,this.indeterminate=!1,this.color="primary"}render(){const t=Math.min(100,Math.max(0,this.value));return o`
      <div
        class="track"
        part="track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?n:t}
      >
        <div
          class="bar"
          part="bar"
          style=${this.indeterminate?"":`width:${t}%`}
        ></div>
      </div>
    `}};hi.properties={value:{type:Number},indeterminate:{type:Boolean,reflect:!0},color:{type:String,reflect:!0}},hi.styles=[p,h`
      :host {
        display: block;
        width: 100%;
      }
      .track {
        position: relative;
        width: 100%;
        height: 4px;
        border-radius: 999px;
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.12));
        overflow: hidden;
      }
      .bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 999px;
        background: var(--ui-color-primary, #1976d2);
        transition: width 200ms ease;
      }
      :host([color='secondary']) .bar {
        background: var(--ui-color-secondary, #9c27b0);
      }
      :host([color='success']) .bar {
        background: var(--ui-color-success, #2e7d32);
      }
      :host([color='warning']) .bar {
        background: var(--ui-color-warning, #ed6c02);
      }
      :host([color='error']) .bar {
        background: var(--ui-color-error, #d32f2f);
      }
      :host([color='info']) .bar {
        background: var(--ui-color-info, #0288d1);
      }
      :host([indeterminate]) .bar {
        width: 40%;
        animation: ui-indeterminate 1.2s ease-in-out infinite;
      }
      @keyframes ui-indeterminate {
        0% {
          left: -40%;
        }
        100% {
          left: 100%;
        }
      }
    `];let at=hi;d("ui-progress",at);at.__docgenInfo={description:"",methods:[],displayName:"UiProgress"};const pi=class pi extends l{constructor(){super(...arguments),this.open=!1,this.label="",this.dismissible=!0,this._onKeydown=t=>{t.key==="Escape"&&this.dismissible&&this.close()}}_onBackdrop(t){t.target===t.currentTarget&&this.dismissible&&this.close()}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}close(){this.open&&(this.open=!1)}show(){this.open||(this.open=!0)}updated(t){t.has("open")&&this.dispatchEvent(new CustomEvent(this.open?"open":"close",{bubbles:!0,composed:!0}))}render(){return this.open?o`
      <div class="backdrop" part="backdrop" @click=${this._onBackdrop}>
        <div
          class="dialog"
          part="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${this.label||n}
        >
          <slot name="header"></slot>
          <div class="body" part="body"><slot></slot></div>
          <slot name="footer"></slot>
        </div>
      </div>
    `:n}};pi.properties={open:{type:Boolean,reflect:!0},label:{type:String},dismissible:{type:Boolean,reflect:!0}},pi.styles=[p,h`
      :host {
        display: contents;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1300;
      }
      .dialog {
        display: flex;
        flex-direction: column;
        background: var(--ui-color-bg, #fff);
        border-radius: var(--ui-radius, 4px);
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
          0 24px 38px 3px rgba(0, 0, 0, 0.14),
          0 9px 46px 8px rgba(0, 0, 0, 0.12);
        min-width: 280px;
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
        overflow: hidden;
      }
      .body {
        padding: 8px 24px 16px;
        overflow: auto;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      ::slotted([slot='header']) {
        margin: 0;
        padding: 16px 24px 8px;
        font-size: 18px;
        font-weight: 600;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      ::slotted([slot='footer']) {
        padding: 8px 24px 16px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
    `];let nt=pi;d("ui-dialog",nt);nt.__docgenInfo={description:"",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"close",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"show",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiDialog"};const ui=class ui extends l{constructor(){super(...arguments),this.severity="info",this.color="",this.variant="standard",this.title="",this.dismissible=!1}updated(){!this.color&&this.hasAttribute("color")&&this.removeAttribute("color")}_onClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){return o`
      <div class="alert" role="alert" part="alert">
        <div class="content" part="content">
          ${this.title?o`<div class="title" part="title">${this.title}</div>`:n}
          <div class="body" part="body"><slot></slot></div>
        </div>
        ${this.dismissible?o`<button class="close" part="close" aria-label="Dismiss" @click=${this._onClose}>&times;</button>`:n}
      </div>
    `}};ui.properties={severity:{type:String,reflect:!0},color:{type:String,reflect:!0},variant:{type:String,reflect:!0},title:{type:String},dismissible:{type:Boolean,reflect:!0}},ui.styles=[p,h`
      :host {
        display: block;
      }
      .alert {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 8px 16px;
        border-radius: var(--ui-radius, 4px);
        border: 1px solid transparent;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.04));
      }
      .content {
        flex: 1;
        min-width: 0;
      }
      .title {
        font-weight: 600;
        margin-bottom: 2px;
      }

      :host([severity='success']) .alert {
        --sev: var(--ui-color-success, #2e7d32);
      }
      :host([severity='info']) .alert {
        --sev: var(--ui-color-info, #0288d1);
      }
      :host([severity='warning']) .alert {
        --sev: var(--ui-color-warning, #ed6c02);
      }
      :host([severity='error']) .alert {
        --sev: var(--ui-color-error, #d32f2f);
      }

      /* A colour key outranks the severity: an alert can carry any palette tone,
         and it takes that tone's contrast text with it. */
      :host([color='primary']) .alert {
        --sev: var(--ui-color-primary, #1976d2);
        --sev-contrast: var(--ui-color-primary-contrast, #fff);
      }
      :host([color='secondary']) .alert {
        --sev: var(--ui-color-secondary, #9c27b0);
        --sev-contrast: var(--ui-color-secondary-contrast, #fff);
      }
      :host([color='success']) .alert {
        --sev: var(--ui-color-success, #2e7d32);
        --sev-contrast: var(--ui-color-success-contrast, #fff);
      }
      :host([color='info']) .alert {
        --sev: var(--ui-color-info, #0288d1);
        --sev-contrast: var(--ui-color-info-contrast, #fff);
      }
      :host([color='warning']) .alert {
        --sev: var(--ui-color-warning, #ed6c02);
        --sev-contrast: var(--ui-color-warning-contrast, #fff);
      }
      :host([color='error']) .alert {
        --sev: var(--ui-color-error, #d32f2f);
        --sev-contrast: var(--ui-color-error-contrast, #fff);
      }

      :host([variant='standard']) .alert {
        background: rgba(0, 0, 0, 0.04);
        border-left: 4px solid var(--sev);
      }
      :host([variant='filled']) .alert {
        background: var(--sev);
        color: var(--sev-contrast, #fff);
      }
      :host([variant='outlined']) .alert {
        background: transparent;
        border-color: var(--sev);
        color: var(--sev);
      }

      .close {
        border: none;
        background: transparent;
        color: inherit;
        font-size: 20px;
        line-height: 1;
        cursor: pointer;
        padding: 2px;
        opacity: 0.7;
      }
      .close:hover {
        opacity: 1;
      }
    `];let lt=ui;d("ui-alert",lt);lt.__docgenInfo={description:"",methods:[{name:"updated",docblock:"The colour attribute must exist for the shadow rules to match, but an empty one\nhas no business in the light DOM: a fresh alert reflects no `color` attribute at\nall until one is set (see tests/contract/host-and-reflection.test.ts).",modifiers:[],params:[],returns:{type:{name:"void"}},description:"The colour attribute must exist for the shadow rules to match, but an empty one\nhas no business in the light DOM: a fresh alert reflects no `color` attribute at\nall until one is set (see tests/contract/host-and-reflection.test.ts)."}],displayName:"UiAlert"};const fr=[0,1,2,3,4,6,8,12,16,24],mr={0:"none",1:"0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)",2:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",3:"0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)",4:"0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)",6:"0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)",8:"0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)",12:"0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)",16:"0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)",24:"0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)"};function x(a){const t=Math.max(0,Math.min(24,Math.round(Number(a)||0)));if(t===0)return"none";const e=fr.find(i=>i>=t)??24;return`var(--ui-shadow-${e}, ${mr[e]})`}const br={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function z(a){return`var(--ui-zindex-${a.toLowerCase()}, ${br[a]})`}const fi=class fi extends l{constructor(){super(...arguments),this.elevation=1,this.variant="elevation",this.square=!1}render(){const t=this.variant==="outlined"?"":`box-shadow:${x(this.elevation)};`;return o`<div class="paper" part="root" style=${t}>
      <slot></slot>
    </div>`}};fi.properties={elevation:{type:Number,reflect:!0},variant:{type:String,reflect:!0},square:{type:Boolean,reflect:!0}},fi.styles=[p,h`
      :host {
        display: block;
      }
      .paper {
        display: block;
        background: var(--ui-color-bg-paper, #fff);
        border-radius: var(--ui-radius, 4px);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([square]) .paper {
        border-radius: 0;
      }
      :host([variant='outlined']) .paper {
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
    `];let ct=fi;d("ui-paper",ct);ct.__docgenInfo={description:"",methods:[],displayName:"UiPaper"};const mi=class mi extends l{constructor(){super(...arguments),this.display="block",this.padding="0",this.margin="0",this.gap="0",this.radius="",this.bgcolor="",this.color="",this.border="",this.elevation=-1}_inlineStyle(){const t=[`display:${this.display}`,`padding:${this.padding}`,`margin:${this.margin}`,`gap:${this.gap}`,`border-radius:${this.radius||"var(--ui-radius, 4px)"}`];return this.bgcolor&&t.push(`background:${_(this.bgcolor)}`),this.color&&t.push(`color:${_(this.color)}`),this.border&&t.push(`border:${this.border}`),this.elevation>=0&&t.push(`box-shadow:${x(this.elevation)}`),t.join(";")}render(){return o`<div part="root" style=${this._inlineStyle()}>
      <slot></slot>
    </div>`}};mi.properties={display:{type:String},padding:{type:String},margin:{type:String},gap:{type:String},radius:{type:String},bgcolor:{type:String},color:{type:String},border:{type:String},elevation:{type:Number}},mi.styles=[p,h`
      :host {
        display: block;
      }
    `];let dt=mi;d("ui-box",dt);dt.__docgenInfo={description:"",methods:[],displayName:"UiBox"};const bi=class bi extends l{constructor(){super(...arguments),this.maxWidth="lg",this.fixed=!1,this.disableGutters=!1}render(){return o`<slot></slot>`}};bi.properties={maxWidth:{type:String,attribute:"max-width",reflect:!0},fixed:{type:Boolean,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}},bi.styles=[p,h`
      :host {
        display: block;
        box-sizing: border-box;
        margin-inline: auto;
        padding-inline: 16px;
      }
      /* Fluid by default: fills the available width up to max-width. */
      :host(:not([fixed])) {
        width: 100%;
      }
      :host([disable-gutters]) {
        padding-inline: 0;
      }

      :host([max-width='xs']) {
        max-width: 444px;
      }
      :host([max-width='sm']) {
        max-width: 600px;
      }
      :host([max-width='md']) {
        max-width: 900px;
      }
      :host([max-width='lg']) {
        max-width: 1200px;
      }
      :host([max-width='xl']) {
        max-width: 1536px;
      }
      :host([max-width='false']) {
        max-width: none;
      }
    `];let ht=bi;d("ui-container",ht);ht.__docgenInfo={description:"",methods:[],displayName:"UiContainer"};const gi=class gi extends l{constructor(){super(...arguments),this.direction="column",this.spacing=0,this.alignItems="",this.justifyContent="",this.wrap=!1,this.divider=!1}_gap(){return`calc(${this.spacing} * var(--ui-spacing, 8px))`}render(){const t=[`--ui-stack-gap:${this._gap()}`];return this.alignItems&&t.push(`align-items:${this.alignItems}`),this.justifyContent&&t.push(`justify-content:${this.justifyContent}`),o`<div class="inner" part="root" style=${t.join(";")}>
      <slot></slot>
    </div>`}};gi.properties={direction:{type:String,reflect:!0},spacing:{type:Number,reflect:!0},alignItems:{type:String,attribute:"align-items"},justifyContent:{type:String,attribute:"justify-content"},wrap:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}},gi.styles=[p,h`
      :host {
        display: block;
      }
      .inner {
        display: flex;
        flex-direction: column;
        gap: var(--ui-stack-gap, 0);
      }
      :host([direction='row']) .inner {
        flex-direction: row;
      }
      :host([direction='row-reverse']) .inner {
        flex-direction: row-reverse;
      }
      :host([direction='column']) .inner {
        flex-direction: column;
      }
      :host([direction='column-reverse']) .inner {
        flex-direction: column-reverse;
      }
      :host([wrap]) .inner {
        flex-wrap: wrap;
      }

      /* MUI Stack dividers: every child after the first gets a leading rule.
         The first-child reset removes it from the top/left edge. The reset
         relies on :first-child matching a slotted node; if a consumer inserts
         a node dynamically that is not first it still gets its rule, so the
         treatment degrades gracefully rather than breaking layout. */
      :host([divider]) .inner ::slotted(*) {
        border-block-start: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      :host([divider]) .inner ::slotted(*:first-child) {
        border-block-start: none;
      }
    `];let pt=gi;d("ui-stack",pt);pt.__docgenInfo={description:"",methods:[],displayName:"UiStack"};const gr=[{name:"xs",min:0},{name:"sm",min:600},{name:"md",min:900},{name:"lg",min:1200},{name:"xl",min:1536}];function vr(){let a="";for(const t of gr)for(let e=1;e<=12;e+=1){const i=`:host([${t.name}='${e}']) { grid-column: span ${e}; }`;a+=t.min>0?`@media (min-width: ${t.min}px) { ${i} }`:`${i}
`}return a}const vi=class vi extends l{constructor(){super(...arguments),this.container=!1,this.item=!1,this.spacing=0,this.rowSpacing=-1,this.columnSpacing=-1,this.xs=0,this.sm=0,this.md=0,this.lg=0,this.xl=0}updated(){const t=this.rowSpacing>=0?this.rowSpacing:this.spacing,e=this.columnSpacing>=0?this.columnSpacing:this.spacing;this.style.setProperty("--ui-grid-row-gap",`calc(${t} * var(--ui-spacing, 8px))`),this.style.setProperty("--ui-grid-column-gap",`calc(${e} * var(--ui-spacing, 8px))`)}render(){return o`<slot></slot>`}};vi.properties={container:{type:Boolean,reflect:!0},item:{type:Boolean,reflect:!0},spacing:{type:Number,reflect:!0},rowSpacing:{type:Number,attribute:"row-spacing"},columnSpacing:{type:Number,attribute:"column-spacing"},xs:{type:Number,reflect:!0},sm:{type:Number,reflect:!0},md:{type:Number,reflect:!0},lg:{type:Number,reflect:!0},xl:{type:Number,reflect:!0}},vi.styles=[p,h`
      :host {
        display: block;
      }
      :host([container]) {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        row-gap: var(--ui-grid-row-gap, 0);
        column-gap: var(--ui-grid-column-gap, 0);
      }
    `,ti(vr())];let ut=vi;d("ui-grid",ut);ut.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiGrid"};const yi=class yi extends l{constructor(){super(...arguments),this.cols=2,this.rowHeight="160px",this.gap=4,this.variant="standard"}updated(){this.style.gridTemplateColumns=`repeat(${this.cols}, 1fr)`,this.style.gridAutoRows=this.rowHeight,this.style.gap=`${this.gap}px`}render(){return o`<slot></slot>`}};yi.properties={cols:{type:Number,reflect:!0},rowHeight:{type:String,attribute:"row-height"},gap:{type:Number,reflect:!0},variant:{type:String,reflect:!0}},yi.styles=[p,h`
      :host {
        display: grid;
      }
    `];let ft=yi;d("ui-image-list",ft);ft.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiImageList"};const xi=class xi extends l{constructor(){super(...arguments),this.cols=1,this.rows=1}updated(){this.style.gridColumn=`span ${this.cols}`,this.style.gridRow=`span ${this.rows}`}render(){return o`<slot></slot><slot name="bar"></slot>`}};xi.properties={cols:{type:Number,reflect:!0},rows:{type:Number,reflect:!0}},xi.styles=[p,h`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
      }
      ::slotted(img) {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      ::slotted([slot='bar']) {
        position: absolute;
        inset: auto 0 0 0;
        padding: 8px 12px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
        color: #fff;
        font-size: 13px;
      }
    `];let mt=xi;d("ui-image-list-item",mt);mt.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiImageListItem"};const wi=class wi extends l{constructor(){super(...arguments),this.columns=3,this.spacing=4}updated(){this.style.setProperty("--ui-masonry-columns",String(this.columns)),this.style.setProperty("--ui-masonry-spacing",`${this.spacing}px`)}render(){return o`<slot></slot>`}};wi.properties={columns:{type:Number,reflect:!0},spacing:{type:Number,reflect:!0}},wi.styles=[p,h`
      :host {
        display: block;
        columns: var(--ui-masonry-columns, 3);
        column-gap: var(--ui-masonry-spacing, 4px);
      }
      ::slotted(*) {
        display: block;
        break-inside: avoid;
        margin-bottom: var(--ui-masonry-spacing, 4px);
      }
    `];let bt=wi;d("ui-masonry",bt);bt.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiMasonry"};const ki=class ki extends l{constructor(){super(...arguments),this.title="",this.subheader="",this._onSlotChange=t=>{const e=t.target,i=e.assignedNodes({flatten:!0}).some(s=>s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&(s.textContent??"").trim()!=="");e.name==="avatar"&&this.toggleAttribute("has-avatar",i),e.name==="action"&&this.toggleAttribute("has-action",i)}}render(){return o`
      <div class="root" part="root">
        <div class="avatar" part="avatar">
          <slot name="avatar" @slotchange=${this._onSlotChange}></slot>
        </div>
        <div class="content" part="content">
          ${this.title?o`<span class="title" part="title">${this.title}</span>`:n}
          <slot></slot>
          ${this.subheader?o`<span class="subheader" part="subheader">${this.subheader}</span>`:n}
          <slot name="subheader"></slot>
        </div>
        <div class="action" part="action">
          <slot name="action" @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `}};ki.properties={title:{type:String},subheader:{type:String}},ki.styles=[p,h`
      :host {
        display: block;
      }
      .root {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 16px 8px;
      }
      .avatar {
        flex: 0 0 auto;
      }
      :host(:not([has-avatar])) .avatar,
      :host(:not([has-action])) .action {
        display: none;
      }
      .content {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-width: 0;
      }
      .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .subheader {
        font-size: 14px;
        line-height: 1.43;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      .action {
        flex: 0 0 auto;
        margin-inline-start: auto;
      }
    `];let gt=ki;d("ui-card-header",gt);gt.__docgenInfo={description:"",methods:[],displayName:"UiCardHeader"};const ho=class ho extends l{render(){return o`<div class="content" part="root"><slot></slot></div>`}};ho.styles=[p,h`
      :host {
        display: block;
      }
      .content {
        padding: 16px;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      /* MUI gives the last content block extra breathing room above the
         card's bottom edge. */
      :host(:last-child) .content {
        padding-bottom: 24px;
      }
    `];let vt=ho;d("ui-card-content",vt);vt.__docgenInfo={description:"",methods:[],displayName:"UiCardContent"};const _i=class _i extends l{constructor(){super(...arguments),this.disableSpacing=!1}render(){return o`<div class="actions" part="root"><slot></slot></div>`}};_i.properties={disableSpacing:{type:Boolean,attribute:"disable-spacing",reflect:!0}},_i.styles=[p,h`
      :host {
        display: block;
      }
      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
      }
      :host([disable-spacing]) .actions {
        gap: 0;
      }
    `];let yt=_i;d("ui-card-actions",yt);yt.__docgenInfo={description:"",methods:[],displayName:"UiCardActions"};const $i=class $i extends l{constructor(){super(...arguments),this.image="",this.alt="",this.height="140px",this.component="img"}updated(){this.style.height=this.height}render(){return this.image&&this.component!=="div"?o`<img
        class="media"
        part="media"
        src=${this.image}
        alt=${this.alt}
      />`:o`<div class="media" part="media"><slot></slot></div>`}};$i.properties={image:{type:String},alt:{type:String},height:{type:String},component:{type:String}},$i.styles=[p,h`
      :host {
        display: block;
        overflow: hidden;
      }
      .media {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `];let xt=$i;d("ui-card-media",xt);xt.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiCardMedia"};const Si=class Si extends l{constructor(){super(...arguments),this.disabled=!1,this.href="",this._onActivate=()=>{this.disabled||this.dispatchEvent(new CustomEvent("card-action-click",{bubbles:!0,composed:!0}))}}render(){const t=this.href?o`<a
          class="control"
          part="button"
          href=${this.href}
          aria-disabled=${this.disabled?"true":"false"}
          @click=${this._onActivate}
        ></a>`:o`<button
          class="control"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this._onActivate}
        ></button>`;return o`
      <div class="content" part="content"><slot></slot></div>
      ${t}
    `}};Si.properties={disabled:{type:Boolean,reflect:!0},href:{type:String}},Si.styles=[p,h`
      :host {
        display: block;
        position: relative;
      }
      .control {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        font: inherit;
        color: inherit;
        cursor: pointer;
        text-align: inherit;
      }
      .control:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([disabled]) .control {
        cursor: default;
        pointer-events: none;
      }
    `];let wt=Si;d("ui-card-action-area",wt);wt.__docgenInfo={description:"",methods:[],displayName:"UiCardActionArea"};const co=Symbol.for(""),yr=a=>{if(a?.r===co)return a?._$litStatic$},io=a=>({_$litStatic$:a,r:co}),xr=(a,...t)=>({_$litStatic$:t.reduce((e,i,s)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+a[s+1],a[0]),r:co}),Mo=new Map,wr=a=>(t,...e)=>{const i=e.length;let s,r;const c=[],u=[];let f,m=0,b=!1;for(;m<i;){for(f=t[m];m<i&&(r=e[m],(s=yr(r))!==void 0);)f+=s+t[++m],b=!0;m!==i&&u.push(r),c.push(f),m++}if(m===i&&c.push(t[i]),b){const g=c.join("$$lit$$");(t=Mo.get(g))===void 0&&(c.raw=c,Mo.set(g,t=c)),e=u}return a(t,...e)},Do=wr(o);function Qs(a="color"){return ti(Object.entries(lo).map(([t,e])=>`:host([color='${t}']) { ${a}: ${e}; }`).join(`
`))}function jo(a){const t=!!a&&Object.prototype.hasOwnProperty.call(lo,a);return a&&!t?a:""}const kr={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",caption:"span",overline:"span",button:"span"},_r=Qs("color"),Ci=class Ci extends l{constructor(){super(...arguments),this.variant="body1",this.component="",this.align="",this.color="",this.gutterBottom=!1,this.noWrap=!1}updated(t){if(!t.has("color"))return;const e=jo(this.color);e?this.style.setProperty("--ui-typography-color",e):this.style.removeProperty("--ui-typography-color")}render(){const t=this.component||kr[this.variant]||"p";return Do`
      <${io(t)} class="text" part=${xr`root`}
        ><slot></slot></${io(t)}>
    `}};Ci.properties={variant:{type:String,reflect:!0},component:{type:String},align:{type:String,reflect:!0,converter:{fromAttribute:t=>t??"",toAttribute:t=>t||null}},color:{type:String,reflect:!0,converter:w},gutterBottom:{type:Boolean,attribute:"gutter-bottom",reflect:!0},noWrap:{type:Boolean,attribute:"no-wrap",reflect:!0}},Ci.styles=[p,_r,h`
      :host {
        display: block;
        color: var(--ui-typography-color, var(--ui-color-text, rgba(0, 0, 0, 0.87)));
      }
      .text {
        margin: 0;
      }

      /* Headings wear the display face; every other variant stays in the body
         face. Both come from the theme (typography.headingFamily /
         typography.fontFamily), so one setTheme call moves the whole scale. */
      :host([variant='h1']) .text,
      :host([variant='h2']) .text,
      :host([variant='h3']) .text,
      :host([variant='h4']) .text,
      :host([variant='h5']) .text,
      :host([variant='h6']) .text {
        font-family: var(--ui-font-heading, var(--ui-font, inherit));
      }

      /* Line-heights read --ui-line-height-<variant> so a theme can tighten
         a variant (overline is the usual suspect) without page CSS. */
      :host([variant='h1']) .text {
        font-size: 96px;
        font-weight: 300;
        line-height: var(--ui-line-height-h1, 1.167);
      }
      :host([variant='h2']) .text {
        font-size: 60px;
        font-weight: 300;
        line-height: var(--ui-line-height-h2, 1.2);
      }
      :host([variant='h3']) .text {
        font-size: 48px;
        font-weight: 400;
        line-height: var(--ui-line-height-h3, 1.167);
      }
      :host([variant='h4']) .text {
        font-size: 34px;
        font-weight: 400;
        line-height: var(--ui-line-height-h4, 1.235);
      }
      :host([variant='h5']) .text {
        font-size: 24px;
        font-weight: 400;
        line-height: var(--ui-line-height-h5, 1.334);
      }
      :host([variant='h6']) .text {
        font-size: 20px;
        font-weight: 500;
        line-height: var(--ui-line-height-h6, 1.6);
      }
      :host([variant='subtitle1']) .text {
        font-size: 16px;
        font-weight: 400;
        line-height: var(--ui-line-height-subtitle1, 1.75);
      }
      :host([variant='subtitle2']) .text {
        font-size: 14px;
        font-weight: 500;
        line-height: var(--ui-line-height-subtitle2, 1.57);
      }
      :host([variant='body1']) .text {
        font-size: 16px;
        font-weight: 400;
        line-height: var(--ui-line-height-body1, 1.5);
      }
      :host([variant='body2']) .text {
        font-size: 14px;
        font-weight: 400;
        line-height: var(--ui-line-height-body2, 1.43);
      }
      :host([variant='caption']) .text {
        font-size: 12px;
        font-weight: 400;
        line-height: var(--ui-line-height-caption, 1.66);
      }
      :host([variant='overline']) .text {
        font-size: 12px;
        font-weight: 400;
        line-height: var(--ui-line-height-overline, 2.66);
        text-transform: uppercase;
        letter-spacing: 0.08333em;
      }
      :host([variant='button']) .text {
        font-size: 14px;
        font-weight: 500;
        line-height: var(--ui-line-height-button, 1.75);
        text-transform: uppercase;
        letter-spacing: 0.02857em;
      }

      :host([align='left']) .text {
        text-align: left;
      }
      :host([align='center']) .text {
        text-align: center;
      }
      :host([align='right']) .text {
        text-align: right;
      }
      :host([align='justify']) .text {
        text-align: justify;
      }

      :host([gutter-bottom]) .text {
        margin-bottom: 0.35em;
      }

      :host([no-wrap]) .text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `];let kt=Ci;d("ui-typography",kt);kt.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiTypography"};const Ei=class Ei extends l{constructor(){super(...arguments),this.href="",this.target="",this.rel="",this.underline="always",this.color="primary",this.disabled=!1}render(){return o`
      <a
        part="link"
        href=${this.href||n}
        target=${this.target||n}
        rel=${this.rel||n}
        style=${this.disabled?n:`color:${_(this.color)}`}
        aria-disabled=${this.disabled?"true":n}
        ><slot></slot
      ></a>
    `}};Ei.properties={href:{type:String},target:{type:String},rel:{type:String},underline:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0}},Ei.styles=[p,h`
      :host {
        display: inline;
      }
      a {
        color: inherit;
        cursor: pointer;
      }
      :host([underline='always']) a {
        text-decoration: underline;
      }
      :host([underline='none']) a {
        text-decoration: none;
      }
      :host([underline='hover']) a {
        text-decoration: none;
      }
      :host([underline='hover']) a:hover,
      :host([underline='hover']) a:focus-visible {
        text-decoration: underline;
      }
      a:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
        border-radius: 2px;
      }
      :host([disabled]) a {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        text-decoration: none;
        pointer-events: none;
      }
    `];let _t=Ei;d("ui-link",_t);_t.__docgenInfo={description:"",methods:[],displayName:"UiLink"};const zi=class zi extends l{constructor(){super(...arguments),this.color="inherit",this.fontSize="medium",this.size=""}updated(t){if(t.has("size")&&(this.style.fontSize=this.size||""),t.has("color")){const e=jo(this.color);e?this.style.setProperty("--ui-icon-color",e):this.style.removeProperty("--ui-icon-color")}}render(){return o`<slot></slot>`}};zi.properties={color:{type:String,reflect:!0,converter:w},fontSize:{type:String,attribute:"font-size",reflect:!0},size:{type:String}},zi.styles=[p,Qs("color"),h`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 24px;
        line-height: 1;
        /* Palette colours come from paletteRules; this is the raw-colour path. */
        color: var(--ui-icon-color, inherit);
      }
      :host([font-size='small']) {
        font-size: 20px;
      }
      :host([font-size='medium']) {
        font-size: 24px;
      }
      :host([font-size='large']) {
        font-size: 36px;
      }
      :host([font-size='inherit']) {
        font-size: 1em;
      }
      ::slotted(svg),
      ::slotted(ui-svg-icon) {
        width: 1em;
        height: 1em;
        fill: currentColor;
      }
    `];let $t=zi;d("ui-icon",$t);$t.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiIcon"};const $r="http://www.w3.org/2000/svg",Mi=class Mi extends l{constructor(){super(...arguments),this.viewBox="0 0 24 24",this.fontSize="medium",this.color="inherit",this.label="",this._paint=()=>{const t=this.renderRoot.querySelector("svg"),e=this.renderRoot.querySelector("slot");if(!t||!e)return;const i=e.assignedNodes({flatten:!0}).filter(u=>u.nodeType!==Node.COMMENT_NODE);if(!i.length)return;const s=i.length===1?i[0]:null,r=s&&s.nodeType===Node.ELEMENT_NODE&&s.tagName.toLowerCase()==="svg"?s:null;r?.hasAttribute("viewBox")&&t.setAttribute("viewBox",r.getAttribute("viewBox"));const c=r?Array.from(r.childNodes):i;t.replaceChildren(...c.map(u=>this._toSvg(u)).filter(u=>u!==null))}}_toSvg(t){if(t.nodeType===Node.TEXT_NODE)return document.createTextNode(t.textContent??"");if(t.nodeType!==Node.ELEMENT_NODE)return null;const e=t,i=document.createElementNS($r,e.tagName.toLowerCase());for(const s of Array.from(e.attributes))i.setAttribute(s.name,s.value);for(const s of Array.from(e.childNodes)){const r=this._toSvg(s);r&&i.appendChild(r)}return i}firstUpdated(){this._paint()}render(){return o`
      <slot @slotchange=${this._paint}></slot>
      <svg
        part="svg"
        viewBox=${this.viewBox}
        fill="currentColor"
        focusable="false"
        role=${this.label?"img":n}
        aria-hidden=${this.label?n:"true"}
        aria-label=${this.label||n}
        style=${`color:${_(this.color)}`}
      ></svg>
    `}};Mi.properties={viewBox:{type:String,attribute:"view-box"},fontSize:{type:String,attribute:"font-size",reflect:!0},color:{type:String,reflect:!0},label:{type:String}},Mi.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        font-size: 24px;
      }
      :host([font-size='small']) {
        font-size: 20px;
      }
      :host([font-size='medium']) {
        font-size: 24px;
      }
      :host([font-size='large']) {
        font-size: 36px;
      }
      :host([font-size='inherit']) {
        font-size: 1em;
      }
      /* Source only: the drawing is copied into the svg below. */
      slot {
        display: none;
      }
      svg {
        width: 1em;
        height: 1em;
        display: block;
        fill: currentColor;
        flex-shrink: 0;
      }
    `];let St=Mi;d("ui-svg-icon",St);St.__docgenInfo={description:`A single icon drawn from SVG source.

Pass the drawing either as loose SVG children or as one complete \`<svg>\`:

  <ui-svg-icon view-box="0 0 24 24"><path d="..." /></ui-svg-icon>
  <ui-svg-icon><svg viewBox="0 0 24 24"><path d="..." /></svg></ui-svg-icon>

Children written in an HTML document are HTML elements even when they are
called \`path\`, and a \`<slot>\` placed inside \`<svg>\` is parsed into the SVG
namespace, where it is no longer an HTML slot and distributes nothing. That is
why this component copies the source into its own \`<svg>\` as real SVG
elements instead of slotting it in place. The originals are left alone, so
frameworks that own those nodes stay happy.`,methods:[{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiSvgIcon"};const Ni=class Ni extends l{constructor(){super(...arguments),this.dense=!1,this.disablePadding=!1}render(){return o`<slot name="subheader"></slot><slot></slot>`}};Ni.properties={dense:{type:Boolean,reflect:!0},disablePadding:{type:Boolean,attribute:"disable-padding",reflect:!0}},Ni.styles=[p,h`
      :host {
        display: block;
        padding: 8px 0;
      }
      :host([disable-padding]) {
        padding: 0;
      }
      /* Component-local variable (not a theme token): list items read it for
         their vertical padding, so the dense flag propagates without reach-in. */
      :host([dense]) {
        --ui-list-item-padding-y: 4px;
      }
    `];let Ct=Ni;d("ui-list",Ct);Ct.__docgenInfo={description:"",methods:[],displayName:"UiList"};const Ai=class Ai extends l{constructor(){super(...arguments),this.alignItems="center",this.dense=!1,this.divider=!1}render(){return o`<slot></slot><slot name="secondary-action"></slot>`}};Ai.properties={alignItems:{type:String,attribute:"align-items",reflect:!0},dense:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}},Ai.styles=[p,h`
      :host {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: calc(var(--ui-list-item-padding-y, 8px)) 16px;
      }
      :host([align-items='flex-start']) {
        align-items: flex-start;
      }
      :host([divider]) {
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      /* Component-local variable so a standalone dense item matches a dense list. */
      :host([dense]) {
        --ui-list-item-padding-y: 4px;
      }
      ::slotted([slot='secondary-action']) {
        margin-inline-start: auto;
      }
    `];let Et=Ai;d("ui-list-item",Et);Et.__docgenInfo={description:"",methods:[],displayName:"UiListItem"};const Bi=class Bi extends l{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this.dense=!1,this.divider=!1,this.href="",this.target="",this.rel=""}_onClick(t){this.disabled&&this.href&&t.preventDefault()}render(){return this.href?o`
        <a
          class="button"
          part="button"
          href=${this.href}
          target=${this.target||n}
          rel=${this.rel||n}
          aria-disabled=${this.disabled?"true":n}
          @click=${this._onClick}
          ><slot></slot
        ></a>
      `:o`
      <button
        class="button"
        part="button"
        type="button"
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        <slot></slot>
      </button>
    `}};Bi.properties={selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},dense:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0},href:{type:String},target:{type:String},rel:{type:String}},Bi.styles=[p,h`
      :host {
        display: block;
      }
      /* Component-local variable matching ui-list-item padding. */
      :host([dense]) {
        --ui-list-item-padding-y: 4px;
      }
      .button {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        margin: 0;
        text-align: left;
        font-family: inherit;
        font-size: 16px;
        line-height: 1.5;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: transparent;
        border: none;
        padding: calc(var(--ui-list-item-padding-y, 8px)) 16px;
        cursor: pointer;
        text-decoration: none;
        transition: background-color 120ms ease;
      }
      :host([divider]) .button {
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      .button:hover {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      :host([selected]) .button {
        background: var(--ui-color-action-selected, rgba(0, 0, 0, 0.08));
      }
      .button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: -2px;
      }
      :host([disabled]) .button {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
        pointer-events: none;
      }
    `];let zt=Bi;d("ui-list-item-button",zt);zt.__docgenInfo={description:"",methods:[],displayName:"UiListItemButton"};const Ii=class Ii extends l{constructor(){super(...arguments),this.primary="",this.secondary="",this.inset=!1}render(){return o`
      <span class="primary" part="primary"><slot>${this.primary}</slot></span>
      <span class="secondary" part="secondary"
        ><slot name="secondary">${this.secondary}</slot></span
      >
    `}};Ii.properties={primary:{type:String},secondary:{type:String},inset:{type:Boolean,reflect:!0}},Ii.styles=[p,h`
      :host {
        display: block;
        flex: 1;
        min-width: 0;
      }
      .primary {
        display: block;
        font-size: 16px;
        line-height: 1.5;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .secondary {
        display: block;
        font-size: 14px;
        line-height: 1.43;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([inset]) .primary {
        padding-inline-start: 56px;
      }
    `];let Mt=Ii;d("ui-list-item-text",Mt);Mt.__docgenInfo={description:"",methods:[],displayName:"UiListItemText"};const po=class po extends l{render(){return o`<slot></slot>`}};po.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 56px;
        flex-shrink: 0;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        font-size: 24px;
        line-height: 1;
      }
      ::slotted(*) {
        flex-shrink: 0;
      }
      ::slotted(svg),
      ::slotted(ui-svg-icon),
      ::slotted(ui-icon) {
        width: 24px;
        height: 24px;
      }
    `];let Nt=po;d("ui-list-item-icon",Nt);Nt.__docgenInfo={description:"",methods:[],displayName:"UiListItemIcon"};const Ti=class Ti extends l{constructor(){super(...arguments),this.disableSticky=!1,this.inset=!1,this.color=""}updated(t){t.has("color")&&(this.style.color=this.color?_(this.color):"")}render(){return o`<slot></slot>`}};Ti.properties={disableSticky:{type:Boolean,attribute:"disable-sticky",reflect:!0},inset:{type:Boolean,reflect:!0},color:{type:String}},Ti.styles=[p,h`
      :host {
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 1;
        min-height: 48px;
        padding: 0 16px;
        background: var(--ui-color-bg-paper, #ffffff);
        font-size: 14px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([disable-sticky]) {
        position: static;
      }
      :host([inset]) {
        padding-inline-start: 72px;
      }
    `];let At=Ti;d("ui-list-subheader",At);At.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiListSubheader"};const Pi=class Pi extends l{constructor(){super(...arguments),this.stickyHeader=!1,this.size="medium",this.padding="normal"}render(){return o`<table part="table"><slot></slot></table>`}};Pi.properties={stickyHeader:{type:Boolean,attribute:"sticky-header",reflect:!0},size:{type:String,reflect:!0},padding:{type:String,reflect:!0}},Pi.styles=[p,h`
      :host {
        display: table;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        font-family: inherit;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }

      /* The inner <table> keeps the semantics; the host is the box that takes
         part in layout (a table nested inside the shadow root cannot stretch
         the columns of a table split across shadow boundaries). */
      table {
        display: contents;
      }

      /* Table-level size reaches every cell as an inherited custom property. */
      :host([size='small']) {
        font-size: 13px;
        --ui-table-cell-font-size: 13px;
        --ui-table-cell-padding: 10px 12px;
      }

      /* Table-level padding mode (cells can still override it themselves). */
      :host([padding='checkbox']) {
        --ui-table-cell-padding: 0 0 0 4px;
      }
      :host([padding='none']) {
        --ui-table-cell-padding: 0;
      }

      /* Sticky header: the properties only reach the head subtree, so body
         cells stay static (matching MUI's stickyHeader behavior). */
      :host([sticky-header]) ::slotted(ui-table-head) {
        --ui-table-cell-position: sticky;
        --ui-table-cell-top: 0;
        --ui-table-cell-z-index: 2;
        --ui-table-cell-bg: var(--ui-color-bg-paper, #fff);
      }
    `];let Bt=Pi;d("ui-table",Bt);Bt.__docgenInfo={description:"Table root.\n\nThe host is the table box (`display: table`) and the inner `<table>` is\n`display: contents`, purely for semantics. Slotted `ui-table-head` /\n`ui-table-body` / `ui-table-row` / `ui-table-cell` elements follow the same\npattern, so every element that participates in table layout is the custom\nelement itself and the browser keeps one real table grid — a table whose parts\nlive inside their own shadow roots gets wrapped in an anonymous table whose\ncolumns stop at max-content width.\n\nA shadow root cannot style descendants that live in *another* shadow root, so\nthe cross-cutting concerns are coordinated through inherited custom\nproperties: the host carries `--ui-table-cell-padding` / `-font-size` (which\nevery `ui-table-cell` reads as the fallback for its own padding and size) and,\nfor a sticky header, `::slotted(ui-table-head)` — a direct light-DOM child, so\nit is selectable — receives the sticky/background properties that its\ndescendant cells consume. Custom properties inherit along the flattened tree,\nso both reach the cells through the slotted chain. They are component-private\nproperties, not design tokens, so declaring them on `:host` is fine.",methods:[],displayName:"UiTable"};const uo=class uo extends l{render(){return o`<slot></slot>`}};uo.styles=[p,h`
      :host {
        display: block;
        width: 100%;
        overflow: auto;
      }
    `];let It=uo;d("ui-table-container",It);It.__docgenInfo={description:"A plain block wrapper around `ui-table` that scrolls horizontally when the\ntable is wider than its container. It is deliberately *not* part of the\ntable's semantic tree, so it stays a normal block element.",methods:[],displayName:"UiTableContainer"};const fo=class fo extends l{render(){return o`<thead part="head"><slot></slot></thead>`}};fo.styles=[p,h`
      :host {
        display: table-header-group;
      }

      thead {
        display: contents;
      }
    `];let Tt=fo;d("ui-table-head",Tt);Tt.__docgenInfo={description:"Head section of `ui-table`. The host is the row group\n(`display: table-header-group`) and the inner `<thead>` is `display: contents`,\nso the head, the rows and the cells all take part in one real table grid.\n\nSticky-header styling is not declared here: `ui-table` sets the sticky custom\nproperties on this element via `::slotted(ui-table-head)`, and they inherit\ndown to the `ui-table-cell`s that own the `<th>` boxes.",methods:[],displayName:"UiTableHead"};const mo=class mo extends l{render(){return o`<tbody part="body"><slot></slot></tbody>`}};mo.styles=[p,h`
      :host {
        display: table-row-group;
      }

      tbody {
        display: contents;
      }
    `];let Pt=mo;d("ui-table-body",Pt);Pt.__docgenInfo={description:"Body section of `ui-table`. The host is the row group\n(`display: table-row-group`) and the inner `<tbody>` is `display: contents`, so\nthe rows and cells take part in one real table grid.",methods:[],displayName:"UiTableBody"};const bo=class bo extends l{render(){return o`<tfoot part="footer"><slot></slot></tfoot>`}};bo.styles=[p,h`
      :host {
        display: table-footer-group;
        /* MUI's footer cells are weighted 500; the cell box is the custom
           element, so the weight travels as an inherited custom property. */
        --ui-table-cell-font-weight: 500;
      }

      tfoot {
        display: contents;
      }
    `];let Lt=bo;d("ui-table-footer",Lt);Lt.__docgenInfo={description:"Footer section of `ui-table`. The host is the row group\n(`display: table-footer-group`) and the inner `<tfoot>` is `display: contents`,\nso the rows and cells take part in one real table grid.",methods:[],displayName:"UiTableFooter"};const Li=class Li extends l{constructor(){super(...arguments),this.hover=!1,this.selected=!1}render(){return o`<tr part="row"><slot></slot></tr>`}};Li.properties={hover:{type:Boolean,reflect:!0},selected:{type:Boolean,reflect:!0}},Li.styles=[p,h`
      :host {
        display: table-row;
      }

      tr {
        display: contents;
      }

      :host([hover]:hover) {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }

      :host([selected]) {
        background: var(--ui-color-action-selected, rgba(0, 0, 0, 0.08));
      }
    `];let Rt=Li;d("ui-table-row",Rt);Rt.__docgenInfo={description:"A row of `ui-table`. The host is the row (`display: table-row`) and the inner\n`<tr>` is `display: contents`, so the row and its cells take part in one real\ntable grid.\n\nRow backgrounds are painted on the host and show through the transparent\ncells rendered by `ui-table-cell`.",methods:[],displayName:"UiTableRow"};const Ri=class Ri extends l{constructor(){super(...arguments),this.align="left",this.variant="body",this.padding="normal",this.scope="",this.sortDirection="",this.colSpan=1,this.rowSpan=1,this.component=""}updated(t){t.has("colSpan")&&this.setAttribute("colspan",String(this.colSpan)),t.has("rowSpan")&&this.setAttribute("rowspan",String(this.rowSpan))}render(){const t=this.variant==="head"||this.component==="th",e=this.sortDirection==="asc"?"ascending":this.sortDirection==="desc"?"descending":n;return t?o`<th
          part="cell"
          scope=${this.scope||n}
          colspan=${this.colSpan}
          rowspan=${this.rowSpan}
          aria-sort=${e}
        >
          <slot></slot>
        </th>`:o`<td part="cell" colspan=${this.colSpan} rowspan=${this.rowSpan}>
          <slot></slot>
        </td>`}};Ri.properties={align:{type:String,reflect:!0},variant:{type:String,reflect:!0},padding:{type:String,reflect:!0},scope:{type:String},sortDirection:{type:String,attribute:"sort-direction",reflect:!0,converter:w},colSpan:{type:Number,attribute:"col-span"},rowSpan:{type:Number,attribute:"row-span"},component:{type:String}},Ri.styles=[p,h`
      :host {
        display: table-cell;
        /* position/top/z-index/background default to the static table-cell
           behavior and are only switched on by a sticky-header ui-table. */
        position: var(--ui-table-cell-position, static);
        top: var(--ui-table-cell-top, auto);
        z-index: var(--ui-table-cell-z-index, auto);
        background: var(--ui-table-cell-bg, transparent);
        padding: var(--ui-table-cell-padding, 16px);
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        vertical-align: inherit;
        text-align: left;
        font-family: inherit;
        font-size: var(--ui-table-cell-font-size, 14px);
        font-weight: var(--ui-table-cell-font-weight, 400);
        line-height: 1.43;
        letter-spacing: normal;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }

      /* The inner element is semantics only — it must not generate a box, or
         the cell would be nested twice in the table. */
      th,
      td {
        display: contents;
      }

      /* padding prop */
      :host([padding='checkbox']) {
        padding: 0 0 0 4px;
      }
      :host([padding='none']) {
        padding: 0;
      }

      /* align prop */
      :host([align='left']) {
        text-align: left;
      }
      :host([align='center']) {
        text-align: center;
      }
      :host([align='right']) {
        text-align: right;
      }
      :host([align='justify']) {
        text-align: justify;
      }

      /* head variant */
      :host([variant='head']) {
        font-weight: 500;
        font-size: 13px;
        line-height: 1.5rem;
        letter-spacing: 0.01071em;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }

      /* footer variant */
      :host([variant='footer']) {
        font-weight: 500;
      }

      /* sort direction: right-align and leave room for the sort arrow */
      :host([sort-direction='asc']),
      :host([sort-direction='desc']) {
        padding-right: 24px;
        text-align: right;
      }
    `];let Ot=Ri;d("ui-table-cell",Ot);Ot.__docgenInfo={description:"A single table cell.\n\nThe custom element **is** the cell: `:host { display: table-cell }` puts it\nstraight into the browser's table layout, and the inner `<th>`/`<td>`\n(`display: contents`) carries the table semantics for assistive tech. Holding\nthe cell box inside the shadow root instead makes the browser wrap the row\ngroups in an anonymous table, so every column collapses to its max-content\nwidth and the table no longer spans its container.\n\n`colspan`/`rowspan` are mirrored onto the host because the table layout\nalgorithm reads them from the element that *is* the table-cell box.\n\nPadding / font / sticky-header values arrive from `ui-table` as\ncomponent-private custom properties, and each one carries a fallback so a cell\nrendered outside a `ui-table` still looks right.",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiTableCell"};const Oi=class Oi extends l{constructor(){super(...arguments),this.active=!1,this.direction="asc",this.hideSortIcon=!1}_onClick(){const t=this.active&&this.direction==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-request",{detail:{direction:t},bubbles:!0,composed:!0}))}render(){const t=this.active||!this.hideSortIcon;return o`
      <button part="button" type="button" @click=${this._onClick}>
        <span class="label" part="label"><slot></slot></span>
        ${t?o`<span class="arrow" part="arrow" aria-hidden="true"
              ><svg viewBox="0 0 24 24">
                <path
                  d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
                ></path></svg
            ></span>`:n}
      </button>
    `}};Oi.properties={active:{type:Boolean,reflect:!0},direction:{type:String,reflect:!0},hideSortIcon:{type:Boolean,attribute:"hide-sort-icon",reflect:!0}},Oi.styles=[p,h`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }

      button {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin: 0;
        padding: 0;
        border: none;
        background: none;
        font: inherit;
        color: inherit;
        cursor: pointer;
        user-select: none;
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }

      .label {
        display: inline-flex;
        align-items: center;
      }

      .arrow {
        display: inline-flex;
        align-items: center;
        opacity: 0;
        transition: opacity 200ms ease, transform 200ms ease;
      }
      button:hover .arrow,
      button:focus-visible .arrow {
        opacity: 0.5;
      }
      .arrow svg {
        display: block;
        width: 18px;
        height: 18px;
        fill: currentColor;
      }

      :host([active]) .arrow {
        opacity: 1;
        color: var(--ui-color-primary, #1976d2);
      }
      :host([direction='desc']) .arrow {
        transform: rotate(180deg);
      }
    `];let Dt=Oi;d("ui-table-sort-label",Dt);Dt.__docgenInfo={description:'A clickable column label rendered inside a `ui-table-cell` with\n`variant="head"`. Clicking emits `sort-request` with the *next* direction, so\nthe consumer can drive the sort state itself.',methods:[],displayName:"UiTableSortLabel"};let Sr=0;const Di=class Di extends l{constructor(){super(...arguments),this.count=0,this.page=0,this.rowsPerPage=10,this.rowsPerPageOptions=[10,25,50],this.labelRowsPerPage="Rows per page:",this.labelDisplayedRows="{from}-{to} of {count}",this._labelId=`ui-table-pagination-label-${Sr++}`}get _from(){return this.count===0?0:Math.min(this.page*this.rowsPerPage+1,this.count)}get _to(){return this.count===0?0:Math.min(this.count,(this.page+1)*this.rowsPerPage)}get _lastPage(){const t=Math.max(1,this.rowsPerPage);return Math.max(0,Math.ceil(this.count/t)-1)}get _displayedRows(){return this.labelDisplayedRows.replace("{from}",String(this._from)).replace("{to}",String(this._to)).replace("{count}",String(this.count))}_onRowsPerPageChange(t){const e=Number(t.target.value);this.rowsPerPage=e,this.dispatchEvent(new CustomEvent("rows-per-page-change",{detail:{rowsPerPage:e},bubbles:!0,composed:!0}))}_onPrevious(){if(this.page<=0)return;const t=this.page-1;this.page=t,this.dispatchEvent(new CustomEvent("page-change",{detail:{page:t},bubbles:!0,composed:!0}))}_onNext(){if(this.page>=this._lastPage)return;const t=this.page+1;this.page=t,this.dispatchEvent(new CustomEvent("page-change",{detail:{page:t},bubbles:!0,composed:!0}))}render(){return o`
      <div class="root" part="root">
        <div class="rows-per-page" part="rows-per-page">
          <span class="label" part="label-rows-per-page" id=${this._labelId}
            >${this.labelRowsPerPage}</span
          >
          <select
            part="select"
            aria-labelledby=${this._labelId}
            @change=${this._onRowsPerPageChange}
          >
            ${this.rowsPerPageOptions.map(t=>o`<option value=${String(t)} ?selected=${t===this.rowsPerPage}>
                  ${t}
                </option>`)}
          </select>
        </div>
        <div class="actions" part="actions">
          <span class="displayed" part="displayed-rows">${this._displayedRows}</span>
          <button
            part="previous-button"
            type="button"
            aria-label="Previous page"
            ?disabled=${this.page<=0}
            @click=${this._onPrevious}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path>
            </svg>
          </button>
          <button
            part="next-button"
            type="button"
            aria-label="Next page"
            ?disabled=${this.page>=this._lastPage}
            @click=${this._onNext}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
            </svg>
          </button>
        </div>
      </div>
    `}};Di.properties={count:{type:Number,reflect:!0},page:{type:Number,reflect:!0},rowsPerPage:{type:Number,attribute:"rows-per-page",reflect:!0},rowsPerPageOptions:{type:Array,attribute:"rows-per-page-options"},labelRowsPerPage:{type:String,attribute:"label-rows-per-page"},labelDisplayedRows:{type:String,attribute:"label-displayed-rows"}},Di.styles=[p,h`
      :host {
        display: block;
        width: 100%;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        font-size: 14px;
      }

      .root {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        gap: 12px;
        min-height: 52px;
      }

      .rows-per-page {
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      }

      select {
        box-sizing: border-box;
        font-family: inherit;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        border-radius: var(--ui-radius, 4px);
        padding: 4px 28px 4px 8px;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,0.54)' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 4px center;
        cursor: pointer;
      }
      select:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 1px;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 4px;
        border-left: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        padding-left: 12px;
      }

      .displayed {
        white-space: nowrap;
        margin-right: 4px;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        border: none;
        border-radius: 50%;
        background: none;
        color: inherit;
        cursor: pointer;
      }
      button:hover:not(:disabled) {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      button:disabled {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: default;
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      button svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `];let jt=Di;d("ui-table-pagination",jt);jt.__docgenInfo={description:"Table pagination control: rows-per-page selector on the left, displayed-rows\nsummary and previous/next buttons on the right, separated by a divider.\n\nBuilt from native `<select>` / `<button>` elements only (no `ui-*` elements),\nso it works standalone. It is fully controlled: the component updates its own\nreflected properties and emits `page-change` / `rows-per-page-change` for the\nconsumer to persist.",methods:[],displayName:"UiTablePagination"};const Cr=["primary","secondary","default","transparent","inherit"],ji=class ji extends l{constructor(){super(...arguments),this.position="fixed",this.color="primary",this.elevation=4,this.square=!1}render(){const t=Cr.includes(this.color)?"":`background:${_(this.color)};color:var(--ui-color-text, rgba(0, 0, 0, 0.87));`;return o`
      <header
        class="bar"
        part="root"
        style="z-index:${z("appBar")};box-shadow:${x(this.elevation)};${t}"
      >
        <slot></slot>
      </header>
    `}};ji.properties={position:{type:String,reflect:!0},color:{type:String,reflect:!0},elevation:{type:Number,reflect:!0},square:{type:Boolean,reflect:!0}},ji.styles=[p,h`
      :host {
        display: block;
      }
      .bar {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: var(--ui-radius, 4px);
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([square]) .bar {
        border-radius: 0;
      }
      :host([position='fixed']) .bar {
        position: fixed;
        top: 0;
        left: auto;
        right: 0;
        width: 100%;
      }
      :host([position='absolute']) .bar {
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
        width: 100%;
      }
      :host([position='sticky']) {
        position: sticky;
        top: 0;
        z-index: var(--ui-zindex-appbar, 1100);
      }
      :host([position='fixed']) {
        z-index: var(--ui-zindex-appbar, 1100);
      }
      :host([position='sticky']) .bar {
        position: relative;
      }
      :host([position='static']) .bar {
        position: static;
      }
      :host([position='relative']) .bar {
        position: relative;
      }
      :host([color='primary']) .bar {
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([color='secondary']) .bar {
        background: var(--ui-color-secondary, #9c27b0);
        color: #fff;
      }
      :host([color='default']) .bar {
        background: var(--ui-color-bg-paper, #fff);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([color='transparent']) .bar,
      :host([color='inherit']) .bar {
        background: transparent;
        color: inherit;
      }
    `];let qt=ji;d("ui-app-bar",qt);qt.__docgenInfo={description:"",methods:[],displayName:"UiAppBar"};const qi=class qi extends l{constructor(){super(...arguments),this.variant="regular",this.disableGutters=!1}render(){return o`<slot></slot>`}};qi.properties={variant:{type:String,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}},qi.styles=[p,h`
      :host {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 56px;
        padding-inline: 16px;
      }
      :host([variant='dense']) {
        min-height: 48px;
      }
      :host([disable-gutters]) {
        padding-inline: 0;
      }
    `];let Ht=qi;d("ui-toolbar",Ht);Ht.__docgenInfo={description:"",methods:[],displayName:"UiToolbar"};const Hi=class Hi extends l{constructor(){super(...arguments),this.open=!1,this.anchor="left",this.variant="temporary",this.width="240px",this.elevation=16,this.dismissible=!0,this._prevOpen=null,this._onKeydown=t=>{t.key==="Escape"&&(!this.open||!this.dismissible||this.variant==="temporary"&&(this.open=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}show(){this.open||(this.open=!0)}close(){this.open&&(this.open=!1)}_onBackdrop(t){t.target===t.currentTarget&&this.dismissible&&this.close()}_panelStyle(){return`${this.anchor==="top"||this.anchor==="bottom"?`height:${this.width};`:`width:${this.width};`}z-index:${z("drawer")};box-shadow:${x(this.elevation)};`}updated(t){if(!t.has("open"))return;const e=this._prevOpen;this._prevOpen=this.open,e!==null&&this.dispatchEvent(new CustomEvent(this.open?"open":"close",{bubbles:!0,composed:!0}))}render(){const e=this.variant==="permanent"||this.open,i=this.variant==="temporary"&&this.open;return o`
      ${i?o`<div
            class="backdrop"
            part="backdrop"
            @click=${this._onBackdrop}
          ></div>`:n}
      ${e?o`<div class="panel" part="panel" style=${this._panelStyle()}>
            <slot name="header"></slot>
            <slot></slot>
          </div>`:n}
    `}};Hi.properties={open:{type:Boolean,reflect:!0},anchor:{type:String,reflect:!0},variant:{type:String,reflect:!0},width:{type:String},elevation:{type:Number,reflect:!0},dismissible:{type:Boolean,reflect:!0}},Hi.styles=[p,h`
      :host {
        display: block;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        background: var(--ui-color-backdrop, rgba(0, 0, 0, 0.5));
        z-index: calc(var(--ui-zindex-drawer, 1200) - 1);
      }
      .panel {
        display: flex;
        flex-direction: column;
        overflow: auto;
        background: var(--ui-color-bg-paper, #fff);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([variant='permanent']) .panel {
        position: relative;
        height: 100%;
      }
      :host([variant='persistent']) .panel,
      :host([variant='temporary']) .panel {
        position: fixed;
      }
      :host([anchor='left']) .panel {
        top: 0;
        bottom: 0;
        left: 0;
      }
      :host([anchor='right']) .panel {
        top: 0;
        bottom: 0;
        right: 0;
      }
      :host([anchor='top']) .panel {
        top: 0;
        left: 0;
        right: 0;
      }
      :host([anchor='bottom']) .panel {
        bottom: 0;
        left: 0;
        right: 0;
      }
      ::slotted([slot='header']) {
        padding: 16px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
    `];let Vt=Hi;d("ui-drawer",Vt);Vt.__docgenInfo={description:"",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"show",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"close",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiDrawer"};const Vi=class Vi extends l{constructor(){super(...arguments),this.open=!1,this.anchorEl="",this.placement="bottom",this.offset=8,this.dismissible=!0,this._style="",this._closeReason="backdropClick",this._pendingSelect=null,this._prevOpen=null,this._onDocScroll=()=>{this._position()},this._onDocKeydown=t=>{t.key!=="Escape"||!this.dismissible||this._close("escapeKeyDown")},this._onDocClick=t=>{this.dismissible&&(t.composedPath().includes(this)||this._close("backdropClick"))}}_addDocListeners(){document.addEventListener("scroll",this._onDocScroll,!0),document.addEventListener("resize",this._onDocScroll),document.addEventListener("keydown",this._onDocKeydown),document.addEventListener("click",this._onDocClick,!0)}_removeDocListeners(){document.removeEventListener("scroll",this._onDocScroll,!0),document.removeEventListener("resize",this._onDocScroll),document.removeEventListener("keydown",this._onDocKeydown),document.removeEventListener("click",this._onDocClick,!0)}disconnectedCallback(){super.disconnectedCallback(),this._removeDocListeners()}_close(t){this.open&&(this._closeReason=t,this.open=!1)}_emptyStyle(){return"top:50%;left:50%;transform:translate(-50%,-50%);"}_position(){const t=this.anchorEl?document.getElementById(this.anchorEl):null;if(!t){this._style=`${this._emptyStyle()}box-shadow:${x(8)};`;return}const e=t.getBoundingClientRect(),i=this.offset;let s=0,r=0,c="";switch(this.placement){case"bottom-start":s=e.bottom+i,r=e.left;break;case"bottom-end":s=e.bottom+i,r=e.right,c="translateX(-100%)";break;case"bottom":s=e.bottom+i,r=e.left+e.width/2,c="translateX(-50%)";break;case"top-start":s=e.top-i,r=e.left,c="translateY(-100%)";break;case"top-end":s=e.top-i,r=e.right,c="translate(-100%,-100%)";break;case"top":s=e.top-i,r=e.left+e.width/2,c="translate(-50%,-100%)";break;case"left":s=e.top,r=e.left-i,c="translateX(-100%)";break;case"right":s=e.top,r=e.right+i;break}this._style=`top:${s}px;left:${r}px;`+(c?`transform:${c};`:"")+`box-shadow:${x(8)};`}_onItemSelect(t){const e=t.detail;this._pendingSelect=e?.value??"",t.stopPropagation(),this._close("select")}updated(t){if(!t.has("open"))return;this.open?(this._addDocListeners(),this._position()):this._removeDocListeners();const e=this._prevOpen;if(this._prevOpen=this.open,e!==null){if(this.open){this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}));return}if(this.dispatchEvent(new CustomEvent("close",{detail:{reason:this._closeReason},bubbles:!0,composed:!0})),this._closeReason==="select"&&this._pendingSelect!==null){const i=this._pendingSelect;this._pendingSelect=null,this.dispatchEvent(new CustomEvent("select",{detail:{value:i},bubbles:!0,composed:!0}))}}}render(){return o`
      <slot name="anchor"></slot>
      ${this.open?o`<div
            class="panel"
            part="panel"
            role="menu"
            style=${this._style}
            @item-select=${this._onItemSelect}
          >
            <slot></slot>
          </div>`:n}
    `}};Vi.properties={open:{type:Boolean,reflect:!0},anchorEl:{type:String,attribute:"anchor-el"},placement:{type:String,reflect:!0},offset:{type:Number,reflect:!0},dismissible:{type:Boolean,reflect:!0},_style:{state:!0}},Vi.styles=[p,h`
      :host {
        display: contents;
      }
      .panel {
        position: fixed;
        min-width: 160px;
        max-height: calc(100vh - 32px);
        padding: 4px 0;
        overflow: auto;
        background: var(--ui-color-bg-paper, #fff);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        border-radius: var(--ui-radius, 4px);
      }
    `];let Ft=Vi;d("ui-menu",Ft);Ft.__docgenInfo={description:"",methods:[{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiMenu"};const Fi=class Fi extends l{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1,this.dense=!1}_onClick(){this.disabled||this.dispatchEvent(new CustomEvent("item-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return o`
      <li
        class="item"
        part="menu-item"
        role="menuitem"
        tabindex="-1"
        aria-disabled=${this.disabled?"true":n}
        @click=${this._onClick}
      >
        <slot name="start"></slot>
        <slot></slot>
      </li>
    `}};Fi.properties={value:{type:String},disabled:{type:Boolean,reflect:!0},selected:{type:Boolean,reflect:!0},dense:{type:Boolean,reflect:!0}},Fi.styles=[p,h`
      :host {
        display: block;
      }
      .item {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
        padding: 6px 16px;
        font-size: 14px;
        line-height: 1.5;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        cursor: pointer;
        user-select: none;
        list-style: none;
        white-space: nowrap;
      }
      :host([dense]) .item {
        padding-block: 4px;
        font-size: 13px;
      }
      .item:hover {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      :host([selected]) .item {
        background: var(--ui-color-action-selected, rgba(0, 0, 0, 0.08));
      }
      :host([disabled]) .item {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        background: transparent;
        cursor: default;
        pointer-events: none;
      }
    `];let Wt=Fi;d("ui-menu-item",Wt);Wt.__docgenInfo={description:"",methods:[],displayName:"UiMenuItem"};const No=200,Er=["scroll-button-start","scroll-button-end"],Wi=class Wi extends l{constructor(){super(...arguments),this.value="",this.orientation="horizontal",this.variant="standard",this.centered=!1,this.fullWidth=!1,this.allowScrollButtonsMobile=!1,this._slotNames=[],this._indicator=null,this._onResize=()=>{this._measureIndicator()}}_tabElements(){return Array.from(this.children).filter(t=>!Er.includes(t.getAttribute("slot")??""))}_activeValue(){if(this.value!=="")return this.value;const t=this._tabElements()[0];return t?t.value:""}_syncSelection(){const t=this._activeValue();for(const e of this._tabElements()){const i=e.value===t;e.selected!==i&&(e.selected=i)}}_onSlotChange(){const t=this._tabElements(),e=t.map((s,r)=>`item-${r}`);t.forEach((s,r)=>{const c=e[r];s.getAttribute("slot")!==c&&s.setAttribute("slot",c)}),e.length===this._slotNames.length&&e.every((s,r)=>s===this._slotNames[r])||(this._slotNames=e),this._syncSelection()}_measureIndicator(){const t=this.renderRoot.querySelector(".list"),e=this._activeValue(),i=this._tabElements().find(f=>f.value===e);if(!t||!i){this._indicator!==null&&(this._indicator=null);return}const s=t.getBoundingClientRect(),r=i.getBoundingClientRect(),c={x:r.left-s.left+t.scrollLeft,y:r.top-s.top+t.scrollTop,w:r.width,h:r.height},u=this._indicator;u&&u.x===c.x&&u.y===c.y&&u.w===c.w&&u.h===c.h||(this._indicator=c)}_indicatorStyle(){const t=this._indicator;return t?this.orientation==="vertical"?`transform:translateY(${t.y}px);height:${t.h}px`:`transform:translateX(${t.x}px);width:${t.w}px`:"display:none"}_select(t,e=!1){t!==this.value&&(this.value=t,e&&this._tabElements().find(i=>i.value===t)?.focus(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0})))}_onTabSelect(t){const e=t.detail;e&&typeof e.value=="string"&&this._select(e.value)}_onKeydown(t){const e=this._tabElements();if(e.length===0)return;const i=this.orientation==="vertical",s=i?"ArrowDown":"ArrowRight",r=i?"ArrowUp":"ArrowLeft";if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))return;t.preventDefault();const u=e.findIndex(b=>b.value===this.value),f=u===-1?0:u;let m=f;t.key==="Home"?m=0:t.key==="End"?m=e.length-1:t.key===s?m=(f+1)%e.length:t.key===r&&(m=(f-1+e.length)%e.length),this._select(e[m].value,!0)}_scrollBy(t){const e=this.renderRoot.querySelector(".list");e&&(this.orientation==="vertical"?e.scrollBy({top:t,behavior:"smooth"}):e.scrollBy({left:t,behavior:"smooth"}))}_scrollStart(){this._scrollBy(-No)}_scrollEnd(){this._scrollBy(No)}_measureIfNeeded(t){(t.has("value")||t.has("_slotNames")||t.has("orientation")||t.has("variant")||t.has("centered")||t.has("fullWidth"))&&this._measureIndicator()}updated(t){t.has("value")&&this._syncSelection(),this._measureIfNeeded(t)}firstUpdated(){this._onSlotChange(),requestAnimationFrame(()=>this._measureIndicator())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize)}render(){return o`
      <div class="root">
        <div
          class="list"
          part="list"
          role="tablist"
          aria-orientation=${this.orientation}
          @keydown=${this._onKeydown}
          @tab-select=${this._onTabSelect}
        >
          <slot @slotchange=${this._onSlotChange}></slot>
          ${this._slotNames.map(t=>o`<slot
                name=${t}
                @slotchange=${this._measureIndicator}
              ></slot>`)}
          <div
            class="indicator"
            part="indicator"
            style=${this._indicatorStyle()}
          ></div>
        </div>
        ${this.variant==="scrollable"?o`
              <button
                class="scroll"
                part="scroll-button-start"
                type="button"
                aria-label="Scroll tabs backward"
                @click=${this._scrollStart}
              >
                <slot name="scroll-button-start">&#8249;</slot>
              </button>
              <button
                class="scroll"
                part="scroll-button-end"
                type="button"
                aria-label="Scroll tabs forward"
                @click=${this._scrollEnd}
              >
                <slot name="scroll-button-end">&#8250;</slot>
              </button>
            `:n}
      </div>
    `}};Wi.properties={value:{type:String,reflect:!0,converter:w},orientation:{type:String,reflect:!0},variant:{type:String,reflect:!0},centered:{type:Boolean,reflect:!0},fullWidth:{type:Boolean,attribute:"full-width",reflect:!0},allowScrollButtonsMobile:{type:Boolean,attribute:"allow-scroll-buttons-mobile",reflect:!0},_slotNames:{state:!0},_indicator:{state:!0}},Wi.styles=[p,h`
      :host {
        display: block;
      }
      .root {
        display: flex;
        align-items: stretch;
        position: relative;
      }
      .list {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        min-width: 0;
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      :host([orientation='vertical']) .root {
        flex-direction: column;
      }
      :host([orientation='vertical']) .list {
        flex-direction: column;
        border-bottom: none;
        border-inline-end: 1px solid
          var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      :host([variant='scrollable']) .list {
        overflow-x: auto;
        scrollbar-width: none;
      }
      :host([orientation='vertical'][variant='scrollable']) .list {
        overflow-x: hidden;
        overflow-y: auto;
      }
      :host([centered]) .list {
        justify-content: center;
      }
      :host([full-width]) ::slotted(*) {
        flex: 1 1 0;
      }
      .indicator {
        position: absolute;
        background: var(--ui-color-primary, #1976d2);
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
          width 150ms cubic-bezier(0.4, 0, 0.2, 1),
          height 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      :host([orientation='horizontal']) .indicator {
        bottom: 0;
        left: 0;
        height: 2px;
      }
      :host([orientation='vertical']) .indicator {
        top: 0;
        right: 0;
        width: 2px;
      }
      .scroll {
        display: none;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        padding: 0 8px;
        border: none;
        background: transparent;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        font-size: 20px;
        cursor: pointer;
      }
      .scroll:hover {
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .scroll:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([variant='scrollable']) .scroll {
        display: inline-flex;
      }
      @media (max-width: 599px) {
        :host([variant='scrollable']:not([allow-scroll-buttons-mobile])) .scroll {
          display: none;
        }
      }
    `];let Kt=Wi;d("ui-tabs",Kt);Kt.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}},{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiTabs"};const Ki=class Ki extends l{constructor(){super(...arguments),this.value="",this.label="",this.selected=!1,this.disabled=!1,this.iconPosition="top",this.wrapped=!1}_onClick(){this.disabled||this.dispatchEvent(new CustomEvent("tab-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return o`
      <button
        class="tab"
        part="tab"
        role="tab"
        type="button"
        tabindex=${this.selected?"0":"-1"}
        aria-selected=${this.selected?"true":"false"}
        aria-disabled=${this.disabled?"true":n}
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        <slot name="icon"></slot>
        <span part="label">${this.label}<slot></slot></span>
      </button>
    `}};Ki.properties={value:{type:String},label:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},iconPosition:{type:String,attribute:"icon-position",reflect:!0},wrapped:{type:Boolean,reflect:!0}},Ki.styles=[p,h`
      :host {
        display: inline-flex;
        flex: 0 0 auto;
      }
      .tab {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        min-width: 90px;
        min-height: 48px;
        padding: 12px 16px;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.25;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        white-space: nowrap;
        border: none;
        background: transparent;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        cursor: pointer;
        transition: color 150ms ease, background-color 150ms ease;
      }
      .tab:hover {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      .tab:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: -2px;
      }
      :host([selected]) .tab {
        color: var(--ui-color-primary, #1976d2);
      }
      :host([disabled]) .tab {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: default;
        pointer-events: none;
      }
      :host([icon-position='top']) .tab {
        flex-direction: column;
      }
      :host([icon-position='bottom']) .tab {
        flex-direction: column-reverse;
      }
      :host([icon-position='start']) .tab {
        flex-direction: row;
      }
      :host([icon-position='end']) .tab {
        flex-direction: row-reverse;
      }
      :host([wrapped]) .tab {
        white-space: normal;
      }
    `];let Xt=Ki;d("ui-tab",Xt);Xt.__docgenInfo={description:"",methods:[],displayName:"UiTab"};function to(a,t){const e=[];for(let i=a;i<=t;i+=1)e.push(i);return e}const Xi=class Xi extends l{constructor(){super(...arguments),this.count=1,this.page=1,this.siblingCount=1,this.boundaryCount=1,this.variant="text",this.shape="circular",this.size="medium",this.disabled=!1,this.showFirstButton=!1,this.showLastButton=!1,this.hidePrevButton=!1,this.hideNextButton=!1}_clampPage(){const t=Math.max(1,Math.floor(this.count)||1);return Math.min(Math.max(1,Math.floor(this.page)||1),t)}_items(){const t=Math.max(0,Math.floor(this.count)||0),e=Math.max(0,Math.floor(this.boundaryCount)||0),i=Math.max(0,Math.floor(this.siblingCount)||0),s=this._clampPage(),r=[];if(this.showFirstButton&&r.push("first"),this.hidePrevButton||r.push("previous"),t===0)return this.hideNextButton||r.push("next"),this.showLastButton&&r.push("last"),r;const c=to(1,Math.min(e,t)),u=to(Math.max(t-e+1,e+1),t),f=Math.max(Math.min(s-i,t-e-i*2-1),e+2),m=Math.min(Math.max(s+i,e+i*2+2),u.length>0?u[0]-2:t-1);return r.push(...c),f>e+2?r.push("start-ellipsis"):e+1<t-e&&r.push(e+1),r.push(...to(f,m)),m<t-e-1?r.push("end-ellipsis"):t-e>e&&r.push(t-e),r.push(...u),this.hideNextButton||r.push("next"),this.showLastButton&&r.push("last"),r}_select(t){if(this.disabled)return;const e=Math.max(1,Math.floor(this.count)||1),i=Math.min(Math.max(1,Math.floor(t)||1),e);i!==this.page&&(this.page=i,this.dispatchEvent(new CustomEvent("change",{detail:{page:i},bubbles:!0,composed:!0})))}_pageButton(t){const e=t===this.page;return o`
      <button
        class="item ${e?"selected":""}"
        part=${e?"item selected":"item"}
        type="button"
        aria-label=${`Go to page ${t}`}
        aria-current=${e?"page":n}
        @click=${()=>this._select(t)}
      >
        ${t}
      </button>
    `}_navButton(t){const e={first:"Go to first page",previous:"Go to previous page",next:"Go to next page",last:"Go to last page"},i={first:"«",previous:"‹",next:"›",last:"»"},s=t==="first"?1:t==="last"?Math.max(1,Math.floor(this.count)||1):t==="previous"?this.page-1:this.page+1,r=t==="first"||t==="previous"?this.page<=1:this.page>=this.count;return o`
      <button
        class="item"
        part="item"
        type="button"
        aria-label=${e[t]}
        ?disabled=${r}
        @click=${()=>this._select(s)}
      >
        <slot name=${t}>${i[t]}</slot>
      </button>
    `}_item(t){return typeof t=="number"?this._pageButton(t):t==="start-ellipsis"||t==="end-ellipsis"?o`<span class="item ellipsis" part="ellipsis" aria-hidden="true"
        >&hellip;</span
      >`:this._navButton(t)}render(){return o`
      <nav class="root" part="root" aria-label="pagination navigation">
        ${this._items().map(t=>this._item(t))}
      </nav>
    `}};Xi.properties={count:{type:Number,reflect:!0},page:{type:Number,reflect:!0},siblingCount:{type:Number,attribute:"sibling-count",reflect:!0},boundaryCount:{type:Number,attribute:"boundary-count",reflect:!0},variant:{type:String,reflect:!0},shape:{type:String,reflect:!0},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},showFirstButton:{type:Boolean,attribute:"show-first-button",reflect:!0},showLastButton:{type:Boolean,attribute:"show-last-button",reflect:!0},hidePrevButton:{type:Boolean,attribute:"hide-prev-button",reflect:!0},hideNextButton:{type:Boolean,attribute:"hide-next-button",reflect:!0}},Xi.styles=[p,h`
      :host {
        display: inline-flex;
      }
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }
      .root {
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 0;
      }
      .item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        min-width: 32px;
        padding: 0 6px;
        font-family: inherit;
        font-size: 13px;
        line-height: 1;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: transparent;
        border: 1px solid transparent;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 120ms ease, border-color 120ms ease;
      }
      .item:hover:not(:disabled) {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      .item:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .item:disabled {
        opacity: 0.38;
        cursor: default;
      }
      .item.selected {
        background: var(--ui-color-action-selected, rgba(0, 0, 0, 0.08));
      }
      :host([variant='outlined']) .item {
        border-color: var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      :host([variant='outlined']) .item.selected {
        background: transparent;
        border-color: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary, #1976d2);
      }
      :host([variant='text']) .item.selected {
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([shape='rounded']) .item {
        border-radius: var(--ui-radius, 4px);
      }
      .ellipsis {
        cursor: default;
        border-color: transparent;
        background: transparent;
      }
      :host([size='small']) .item {
        height: 26px;
        min-width: 26px;
        font-size: 12px;
      }
      :host([size='large']) .item {
        height: 40px;
        min-width: 40px;
        font-size: 14px;
      }
    `];let Yt=Xi;d("ui-pagination",Yt);Yt.__docgenInfo={description:"",methods:[],displayName:"UiPagination"};const Yi=class Yi extends l{constructor(){super(...arguments),this.separator="/",this.maxItems=8,this.itemsBeforeCollapse=1,this.itemsAfterCollapse=1,this.expandText="Show path",this._items=[],this._expanded=!1,this._onExpand=()=>{this._expanded||(this._expanded=!0,this.dispatchEvent(new CustomEvent("expand",{bubbles:!0,composed:!0})),this.requestUpdate())},this._onSlotChange=()=>{const t=[];Array.from(this.children).forEach(e=>{if(e.getAttribute("slot")==="separator")return;const i=`item-${t.length}`;e.getAttribute("slot")!==i&&e.setAttribute("slot",i),t.push(e)}),this._items=t,this.requestUpdate()}}firstUpdated(){this._onSlotChange()}_separatorRow(){return o`<li class="separator" part="separator" aria-hidden="true">
      <slot name="separator">${this.separator}</slot>
    </li>`}render(){const t=this._items.length,e=Math.max(0,this.itemsBeforeCollapse),i=Math.max(0,this.itemsAfterCollapse),s=!this._expanded&&t>this.maxItems&&t>e+i,r=[];let c=-1;if(s){for(let m=0;m<e;m+=1)r.push(m);c=e;for(let m=t-i;m<t;m+=1)r.push(m)}else for(let m=0;m<t;m+=1)r.push(m);const u=[];r.forEach((m,b)=>{c===b&&u.push(o`<li class="expand" part="expand">
          <button
            type="button"
            part="expand-button"
            aria-label=${this.expandText}
            @click=${this._onExpand}
          >
            ${this.expandText}
          </button>
        </li>`),u.push(o`<li class="crumb" part="item">
        <slot name=${`item-${m}`}></slot>
      </li>`)});const f=[];return u.forEach((m,b)=>{b>0&&f.push(this._separatorRow()),f.push(m)}),o`
      <nav part="root" aria-label="Breadcrumb">
        <ol class="list" part="list">
          <slot class="collector" @slotchange=${this._onSlotChange}></slot>
          ${f}
        </ol>
      </nav>
    `}};Yi.properties={separator:{type:String},maxItems:{type:Number,attribute:"max-items",reflect:!0},itemsBeforeCollapse:{type:Number,attribute:"items-before-collapse",reflect:!0},itemsAfterCollapse:{type:Number,attribute:"items-after-collapse",reflect:!0},expandText:{type:String,attribute:"expand-text"}},Yi.styles=[p,h`
      :host {
        display: block;
      }
      /* Signal-only slot: collects the un-assigned children so the component
         hears slotchange, which then immediately moves them onto named slots. */
      .collector {
        display: none;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .crumb {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      ::slotted(a) {
        color: inherit;
        text-decoration: none;
      }
      ::slotted(a:hover) {
        text-decoration: underline;
      }
      ::slotted(a:focus-visible) {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .separator {
        display: inline-flex;
        align-items: center;
        margin: 0 8px;
        font-size: 14px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        user-select: none;
        transition: opacity 200ms ease;
      }
      .expand button {
        border: none;
        background: transparent;
        padding: 0;
        font: inherit;
        font-size: 14px;
        color: var(--ui-color-primary, #1976d2);
        text-decoration: underline;
        cursor: pointer;
      }
      .expand button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
    `];let Gt=Yi;d("ui-breadcrumbs",Gt);Gt.__docgenInfo={description:'Breadcrumb trail. The trail items are the light-DOM children; the component\n*assigns* a `slot="item-N"` to each of them (slot-attribute technique) so it\ncan render them in its own `<ol>` with separators between consecutive items.\nA child carrying `slot="separator"` supplies custom separator content.',methods:[{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiBreadcrumbs"};const Gi=class Gi extends l{constructor(){super(...arguments),this.value="",this.showLabels=!1,this._items=[],this._onSlotChange=()=>{const t=[];Array.from(this.children).forEach(e=>{const i=`item-${t.length}`;e.getAttribute("slot")!==i&&e.setAttribute("slot",i),t.push(e)}),this._items=t,this.requestUpdate()},this._onSelect=t=>{const i=t.detail?.value??"";i!==this.value&&(this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0,composed:!0})))}}firstUpdated(){this._onSlotChange()}updated(){this._items.forEach(t=>{const e=t;e.selected=this.value!==""&&e.value===this.value,e.showLabel=this.showLabels})}render(){return o`
      <div class="root" part="root" @bottom-nav-select=${this._onSelect}>
        <slot class="collector" @slotchange=${this._onSlotChange}></slot>
        ${this._items.map((t,e)=>o`<slot name=${`item-${e}`}></slot>`)}
      </div>
    `}};Gi.properties={value:{type:String,reflect:!0,converter:w},showLabels:{type:Boolean,attribute:"show-labels",reflect:!0}},Gi.styles=[p,h`
      :host {
        display: block;
      }
      .collector {
        display: none;
      }
      .root {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        background: var(--ui-color-bg-paper, #fff);
        border-top: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
    `];let Zt=Gi;d("ui-bottom-navigation",Zt);Zt.__docgenInfo={description:'Bottom navigation bar. Assigns `slot="item-N"` to each slotted\n`ui-bottom-navigation-action` and keeps their `selected` / `showLabel` state\nin sync with `value` / `showLabels`.',methods:[{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiBottomNavigation"};const Zi=class Zi extends l{constructor(){super(...arguments),this.value="",this.label="",this.selected=!1,this.showLabel=!1,this._onClick=()=>{this.dispatchEvent(new CustomEvent("bottom-nav-select",{detail:{value:this.value},bubbles:!0,composed:!0}))}}render(){const t=this.showLabel||this.selected;return o`
      <button
        part="action"
        type="button"
        aria-label=${this.label||n}
        aria-current=${this.selected?"page":n}
        @click=${this._onClick}
      >
        <span class="icon" part="icon"><slot></slot></span>
        ${t?o`<span class="label" part="label"
              ><slot name="label">${this.label}</slot></span
            >`:n}
      </button>
    `}};Zi.properties={value:{type:String},label:{type:String},selected:{type:Boolean,reflect:!0},showLabel:{type:Boolean,attribute:"show-label",reflect:!0}},Zi.styles=[p,h`
      :host {
        display: inline-flex;
        flex: 1 1 0;
        min-width: 0;
      }
      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        flex: 1 1 auto;
        min-width: 80px;
        max-width: 168px;
        margin: 0 auto;
        padding: 6px 12px;
        border: none;
        background: transparent;
        font: inherit;
        font-size: 12px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        cursor: pointer;
        transition: color 150ms ease;
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: -2px;
      }
      :host([selected]) button {
        color: var(--ui-color-primary, #1976d2);
      }
      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: transform 150ms ease;
      }
      :host([selected]) .icon {
        transform: scale(1.1);
      }
      .label {
        font-size: 12px;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `];let Jt=Zi;d("ui-bottom-navigation-action",Jt);Jt.__docgenInfo={description:"A single action inside `ui-bottom-navigation`.",methods:[],displayName:"UiBottomNavigationAction"};const Ji=class Ji extends l{constructor(){super(...arguments),this.activeStep=0,this.orientation="horizontal",this.alternativeLabel=!1,this.nonLinear=!1,this.showConnector=!0,this._items=[],this._onSlotChange=()=>{const t=[];Array.from(this.children).forEach(e=>{if(e.getAttribute("slot")==="connector")return;const i=`item-${t.length}`;e.getAttribute("slot")!==i&&e.setAttribute("slot",i),t.push(e)}),this._items=t,this.requestUpdate()}}firstUpdated(){this._onSlotChange()}updated(){this._items.forEach((t,e)=>{const i=t;i.index=e,i.active=e===this.activeStep,i.completed=e<this.activeStep,i.alternativeLabel=this.alternativeLabel,i.orientation=this.orientation})}_connector(t){return o`<slot name="connector">
      <ui-step-connector
        .orientation=${this.orientation}
        ?active=${t+1<=this.activeStep}
        ?completed=${t+1<this.activeStep}
      ></ui-step-connector>
    </slot>`}render(){const t=[];return this._items.forEach((e,i)=>{t.push(o`<slot name=${`item-${i}`}></slot>`),this.showConnector&&i<this._items.length-1&&t.push(this._connector(i))}),o`<div class="root" part="root">
      <slot class="collector" @slotchange=${this._onSlotChange}></slot>
      ${t}
    </div>`}};Ji.properties={activeStep:{type:Number,attribute:"active-step",reflect:!0},orientation:{type:String,reflect:!0},alternativeLabel:{type:Boolean,attribute:"alternative-label",reflect:!0},nonLinear:{type:Boolean,attribute:"non-linear",reflect:!0},showConnector:{type:Boolean,attribute:"show-connector",reflect:!0}},Ji.styles=[p,h`
      :host {
        display: block;
      }
      .collector {
        display: none;
      }
      .root {
        display: flex;
        align-items: flex-start;
        padding: 24px 0;
      }
      :host([orientation='vertical']) .root {
        flex-direction: column;
      }
    `];let Qt=Ji;d("ui-stepper",Qt);Qt.__docgenInfo={description:'Stepper container. Assigns `slot="item-N"` to each slotted `ui-step` and\npropagates `activeStep` / orientation / alternative-label state onto them.\nThe connector lines between steps are rendered here (the `connector` slot\nreplaces their content); a step can still receive a slotted\n`ui-step-connector` of its own.',methods:[{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiStepper"};const Qi=class Qi extends l{constructor(){super(...arguments),this.completed=!1,this.disabled=!1,this.active=!1,this.expanded=!1,this.index=-1,this.alternativeLabel=!1,this.orientation="horizontal",this._onSlotChange=()=>{this._syncChildren()}}updated(){this._syncChildren()}_syncChildren(){Array.from(this.children).forEach(t=>{const e=t;switch(e.localName){case"ui-step-label":{const i=e;i.index=this.index,i.active=this.active,i.completed=this.completed,i.alternativeLabel=this.alternativeLabel;break}case"ui-step-content":{const i=e;i.active=this.active,i.expanded=this.expanded;break}case"ui-step-button":{const i=e;i.index=this.index,i.active=this.active,i.completed=this.completed,i.disabled=this.disabled;break}case"ui-step-connector":{const i=e;i.orientation=this.orientation,i.active=this.active,i.completed=this.completed,i.disabled=this.disabled;break}}})}render(){return o`
      <div class="root" part="root">
        <slot name="header" @slotchange=${this._onSlotChange}></slot>
        <slot @slotchange=${this._onSlotChange}></slot>
      </div>
    `}};Qi.properties={completed:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},active:{type:Boolean,reflect:!0},expanded:{type:Boolean,reflect:!0},index:{type:Number},alternativeLabel:{type:Boolean,attribute:"alternative-label",reflect:!0},orientation:{type:String,reflect:!0}},Qi.styles=[p,h`
      :host {
        display: flex;
        flex: 1 1 0;
        min-width: 0;
      }
      .root {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        width: 100%;
        min-width: 0;
      }
      :host([alternative-label]) .root {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      :host([orientation='vertical']) {
        display: block;
        flex: none;
      }
      :host([orientation='vertical']) .root {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
      }
    `];let Ut=Qi;d("ui-step",Ut);Ut.__docgenInfo={description:"A single step. `index` / `active` / `completed` are driven by the parent\n`ui-stepper`; they (plus orientation) are propagated to the slotted\n`ui-step-label` / `ui-step-content` / `ui-step-button` / `ui-step-connector`\nchildren.",methods:[{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiStep"};const Ui=class Ui extends l{constructor(){super(...arguments),this.optional=!1,this.error=!1,this.completed=!1,this.active=!1,this.index=-1,this.alternativeLabel=!1}render(){return o`
      <span class="icon" part="icon" aria-hidden="true">
        <slot name="icon"
          >${this.completed?o`<span class="check">&#10003;</span>`:this.index>=0?o`<span class="index">${this.index+1}</span>`:n}</slot
        >
      </span>
      <span class="label" part="label">
        <slot></slot>
        ${this.optional?o`<span class="optional" part="optional">Optional</span>`:n}
      </span>
    `}};Ui.properties={optional:{type:Boolean,reflect:!0},error:{type:Boolean,reflect:!0},completed:{type:Boolean,reflect:!0},active:{type:Boolean,reflect:!0},index:{type:Number},alternativeLabel:{type:Boolean,attribute:"alternative-label",reflect:!0}},Ui.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      :host([alternative-label]) {
        flex-direction: column;
        align-items: center;
        gap: 4px;
        text-align: center;
      }
      .icon {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        font-size: 13px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([active]) .icon,
      :host([completed]) .icon {
        background: var(--ui-color-primary, #1976d2);
        border-color: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([error]) .icon {
        border-color: var(--ui-color-error, #d32f2f);
        color: var(--ui-color-error, #d32f2f);
        background: transparent;
      }
      .label {
        font-size: 14px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([active]) .label {
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([error]) .label {
        color: var(--ui-color-error, #d32f2f);
      }
      .optional {
        margin-left: 4px;
        font-size: 12px;
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
    `];let te=Ui;d("ui-step-label",te);te.__docgenInfo={description:"The circled icon + label of a step.",methods:[],displayName:"UiStepLabel"};const ts=class ts extends l{constructor(){super(...arguments),this.active=!1,this.expanded=!1}render(){return o`
      <div class="content" part="content">
        <slot></slot>
        <div class="actions" part="actions"><slot name="actions"></slot></div>
      </div>
    `}};ts.properties={active:{type:Boolean,reflect:!0},expanded:{type:Boolean,reflect:!0}},ts.styles=[p,h`
      :host {
        display: none;
      }
      :host([active]),
      :host([expanded]) {
        display: block;
      }
      .content {
        margin-left: 12px;
        border-left: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        padding: 8px 16px 24px 32px;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 16px;
      }
    `];let ee=ts;d("ui-step-content",ee);ee.__docgenInfo={description:"Expandable body of a vertical step. Hidden unless active or expanded.",methods:[],displayName:"UiStepContent"};const es=class es extends l{constructor(){super(...arguments),this.optional=!1,this.disabled=!1,this.active=!1,this.completed=!1,this.index=-1,this._onClick=()=>{this.disabled||this.dispatchEvent(new CustomEvent("step-click",{detail:{index:this.index},bubbles:!0,composed:!0}))}}render(){return o`
      <button
        part="button"
        type="button"
        ?disabled=${this.disabled}
        aria-current=${this.active?"step":n}
        @click=${this._onClick}
      >
        <span class="icon" part="icon"><slot name="icon"></slot></span>
        <span class="label" part="label">
          <slot></slot>
          ${this.optional?o`<span class="optional" part="optional">Optional</span>`:n}
        </span>
      </button>
    `}};es.properties={optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},active:{type:Boolean,reflect:!0},completed:{type:Boolean,reflect:!0},index:{type:Number}},es.styles=[p,h`
      :host {
        display: inline-flex;
        min-width: 0;
      }
      button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        border: none;
        background: transparent;
        font: inherit;
        color: inherit;
        text-align: left;
        cursor: pointer;
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([disabled]) button {
        cursor: default;
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: none;
        font-size: 13px;
      }
      .label {
        font-size: 14px;
      }
      .optional {
        margin-left: 4px;
        font-size: 12px;
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
    `];let ie=es;d("ui-step-button",ie);ie.__docgenInfo={description:"A clickable step label (for non-linear steppers).",methods:[],displayName:"UiStepButton"};const is=class is extends l{constructor(){super(...arguments),this.orientation="horizontal",this.active=!1,this.completed=!1,this.disabled=!1}render(){return o`<span part="line"></span>`}};is.properties={orientation:{type:String,reflect:!0},active:{type:Boolean,reflect:!0},completed:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}},is.styles=[p,h`
      :host {
        display: block;
        background: var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        transition: background-color 150ms ease;
      }
      :host([orientation='horizontal']) {
        flex: 1 1 auto;
        height: 1px;
        margin-inline: 8px;
        align-self: center;
        min-width: 8px;
      }
      :host([orientation='vertical']) {
        width: 1px;
        height: 24px;
        margin: 8px 0 8px 19px;
      }
      :host([active]),
      :host([completed]) {
        background: var(--ui-color-primary, #1976d2);
      }
      :host([disabled]) {
        background: var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
    `];let se=is;d("ui-step-connector",se);se.__docgenInfo={description:"The line drawn between two steps. Rendered by `ui-stepper` (default) and\n reusable stand-alone.",methods:[],displayName:"UiStepConnector"};const ss=class ss extends l{constructor(){super(...arguments),this.open=!1,this.direction="up",this.ariaLabel="Speed dial",this.dismissible=!0,this._items=[],this._onSlotChange=()=>{const t=[];Array.from(this.children).forEach(e=>{if(e.getAttribute("slot")==="icon")return;const i=`action-${t.length}`;e.getAttribute("slot")!==i&&e.setAttribute("slot",i),t.push(e)}),this._items=t,this.requestUpdate()},this._onKeydown=t=>{t.key==="Escape"&&this.dismissible&&(this.open=!1)},this._onToggle=()=>{this.open=!this.open}}firstUpdated(){this._onSlotChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}updated(t){this._items.forEach(e=>{e.open=this.open}),t.has("open")&&(this.open&&this.dismissible?document.addEventListener("keydown",this._onKeydown):document.removeEventListener("keydown",this._onKeydown),this.dispatchEvent(new CustomEvent(this.open?"open":"close",{bubbles:!0,composed:!0})))}render(){return o`
      <div class="root" part="root" style="z-index:${z("speedDial")}">
        <div class="actions" part="actions">
          <slot class="collector" @slotchange=${this._onSlotChange}></slot>
          ${this._items.map((t,e)=>o`<slot name=${`action-${e}`}></slot>`)}
        </div>
        <button
          class="trigger"
          part="trigger"
          type="button"
          aria-haspopup="true"
          aria-expanded=${this.open?"true":"false"}
          aria-label=${this.ariaLabel}
          style="box-shadow:${x(6)}"
          @click=${this._onToggle}
        >
          <span class="glyph" part="icon"><slot name="icon">+</slot></span>
        </button>
      </div>
    `}};ss.properties={open:{type:Boolean,reflect:!0},direction:{type:String,reflect:!0},ariaLabel:{type:String,attribute:"aria-label"},dismissible:{type:Boolean,reflect:!0}},ss.styles=[p,h`
      :host {
        display: block;
      }
      .collector {
        display: none;
      }
      .root {
        position: fixed;
        bottom: 16px;
        right: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        flex-direction: column;
      }
      :host([direction='down']) .root {
        flex-direction: column-reverse;
      }
      :host([direction='left']) .root {
        flex-direction: row;
      }
      :host([direction='right']) .root {
        flex-direction: row-reverse;
      }
      .actions {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-direction: column;
      }
      :host([direction='down']) .actions {
        flex-direction: column-reverse;
      }
      :host([direction='left']) .actions {
        flex-direction: row;
      }
      :host([direction='right']) .actions {
        flex-direction: row-reverse;
      }
      .trigger {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: none;
        width: 32px;
        height: 32px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
        cursor: pointer;
        transition: background-color 150ms ease;
      }
      .trigger:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .glyph {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 1;
        transition: transform 150ms ease;
      }
      :host([open]) .glyph {
        transform: rotate(45deg);
      }
    `];let oe=ss;d("ui-speed-dial",oe);oe.__docgenInfo={description:'Floating action button that reveals a stack of `ui-speed-dial-action`s.\nAssigns `slot="action-N"` to each slotted action and syncs their `open`\nstate with this component\'s `open`.',methods:[{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiSpeedDial"};const os=class os extends l{constructor(){super(...arguments),this.tooltipTitle="",this.delay=0,this.open=!1,this._onClick=()=>{this.dispatchEvent(new CustomEvent("speed-dial-action-click",{detail:{tooltipTitle:this.tooltipTitle},bubbles:!0,composed:!0}))}}render(){return o`
      ${this.open&&this.tooltipTitle?o`<span
            class="tooltip"
            part="tooltip"
            style="transition-delay:${this.delay}ms"
            >${this.tooltipTitle}</span
          >`:n}
      <button
        part="button"
        type="button"
        aria-label=${this.tooltipTitle||n}
        style="box-shadow:${x(6)}"
        @click=${this._onClick}
      >
        <slot></slot>
      </button>
    `}};os.properties={tooltipTitle:{type:String,attribute:"tooltip-title"},delay:{type:Number},open:{type:Boolean,reflect:!0}},os.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        position: relative;
        opacity: 0;
        transform: scale(0.5);
        pointer-events: none;
        transition: opacity 150ms ease, transform 150ms ease;
      }
      :host([open]) {
        opacity: 1;
        transform: scale(1);
        pointer-events: auto;
      }
      button {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: none;
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: var(--ui-color-bg-paper, #fff);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        font-size: 20px;
        cursor: pointer;
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .tooltip {
        position: absolute;
        right: calc(100% + 8px);
        white-space: nowrap;
        background: #616161;
        color: #fff;
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 12px;
        pointer-events: none;
      }
    `];let re=os;d("ui-speed-dial-action",re);re.__docgenInfo={description:"One action revealed by `ui-speed-dial`.",methods:[],displayName:"UiSpeedDialAction"};const rs=class rs extends l{constructor(){super(...arguments),this.size="medium",this.color="default",this.disabled=!1,this.edge="",this.label=""}get _color(){return this.disabled?"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))":this.color==="default"?"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))":_(this.color)}render(){return o`
      <button
        part="button"
        type="button"
        style="color:${this._color}"
        ?disabled=${this.disabled}
        aria-label=${this.label||n}
      >
        <slot></slot>
      </button>
    `}};rs.properties={size:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},edge:{type:String,reflect:!0,converter:w},label:{type:String}},rs.styles=[p,h`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: inherit;
        font-family: inherit;
        /* medium icon size; also the em base for the slotted content */
        font-size: 1.25rem;
        line-height: 1;
        cursor: pointer;
        transition: background-color 150ms ease, color 150ms ease;
      }
      button:hover {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([size='small']) button {
        padding: 5px;
        font-size: 1.125rem;
      }
      :host([size='large']) button {
        padding: 12px;
        font-size: 1.5rem;
      }
      :host([disabled]) button {
        cursor: not-allowed;
      }
      :host([edge='start']) button {
        margin-left: -8px;
      }
      :host([edge='end']) button {
        margin-right: -8px;
      }
      /* MUI scales whatever is slotted (svg or glyph) from the button's
         font-size, so one size variant drives both padding and icon. */
      ::slotted(*) {
        font-size: 1.25em;
        line-height: 1;
      }
      ::slotted(svg) {
        width: 1em;
        height: 1em;
        fill: currentColor;
      }
    `];let ae=rs;d("ui-icon-button",ae);ae.__docgenInfo={description:"A round, chrome-less button for a single icon (MUI `IconButton`).\nThe icon is slotted as the default content; `label` feeds `aria-label`.",methods:[],displayName:"UiIconButton"};const as=class as extends l{constructor(){super(...arguments),this.orientation="horizontal",this.variant="outlined",this.size="medium",this.color="primary",this.disableElevation=!1,this.fullWidth=!1,this.disabled=!1}render(){return o`<slot part="slot"></slot>`}};as.properties={orientation:{type:String,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},color:{type:String,reflect:!0},disableElevation:{type:Boolean,attribute:"disable-elevation",reflect:!0},fullWidth:{type:Boolean,attribute:"full-width",reflect:!0},disabled:{type:Boolean,reflect:!0}},as.styles=[p,h`
      :host {
        display: inline-flex;
        vertical-align: middle;
        /* the container's rounding plus overflow:hidden clip the group's
           corners; the items themselves are squared off below */
        border-radius: var(--ui-radius, 4px);
        overflow: hidden;
      }
      :host([full-width]) {
        display: flex;
        width: 100%;
      }
      :host([orientation='vertical']) {
        flex-direction: column;
      }
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }
      ::slotted(*) {
        /* --ui-radius feeds the child's own internal button, whose corners
           read var(--ui-radius, 4px); the outer corners come from the host. */
        --ui-radius: 0px;
        border-radius: 0;
      }

      /* Collapse the double border between adjacent buttons: every item after
         the first is pulled one pixel towards its neighbour and the host adds a
         matching leading inset so the first item still sits flush. */
      :host([variant='outlined']) ::slotted(*),
      :host([variant='contained']) ::slotted(*) {
        margin-inline-start: -1px;
      }
      :host([variant='outlined']),
      :host([variant='contained']) {
        padding-inline-start: 1px;
      }

      /* A vertical group collapses along the block axis instead. */
      :host([orientation='vertical']) ::slotted(*) {
        margin-inline-start: 0;
      }
      :host([orientation='vertical'][variant='outlined']) ::slotted(*),
      :host([orientation='vertical'][variant='contained']) ::slotted(*) {
        margin-block-start: -1px;
      }
      :host([orientation='vertical'][variant='outlined']),
      :host([orientation='vertical'][variant='contained']) {
        padding-inline-start: 0;
        padding-block-start: 1px;
      }
    `];let ne=as;d("ui-button-group",ne);ne.__docgenInfo={description:"Groups `ui-button`s into one visual block (MUI `ButtonGroup`).\n\n`variant` / `size` / `color` / `disableElevation` are the group's metadata\nthat consumers mirror on the slotted `ui-button`s (MUI forwards them to its\nchildren); what this component *owns* is the shared corner radius, the border\ncollapse between adjacent buttons, the vertical/full-width layout and the\ndisabled state.",methods:[],displayName:"UiButtonGroup"};const ns=class ns extends l{constructor(){super(...arguments),this.size="large",this.color="default",this.variant="circular",this.disabled=!1,this.href="",this.label=""}render(){const t=x(6),e=this.label||n,i=o`<slot></slot>`;return this.href?o`
        <a
          part="button"
          href=${this.href}
          role="button"
          style="box-shadow:${t}"
          aria-label=${e}
          aria-disabled=${this.disabled?"true":"false"}
        >
          ${i}
        </a>
      `:o`
      <button
        part="button"
        type="button"
        ?disabled=${this.disabled}
        style="box-shadow:${t}"
        aria-label=${e}
      >
        ${i}
      </button>
    `}};ns.properties={size:{type:String,reflect:!0},color:{type:String,reflect:!0},variant:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},href:{type:String},label:{type:String}},ns.styles=[p,h`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      button,
      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        /* large size by default (MUI's Fab default) */
        width: 56px;
        height: 56px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: #e0e0e0;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        font-family: inherit;
        font-size: 24px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        transition: background-color 150ms ease, filter 150ms ease;
      }
      button:focus-visible,
      a:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([size='small']) button,
      :host([size='small']) a {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
      :host([size='medium']) button,
      :host([size='medium']) a {
        width: 48px;
        height: 48px;
        font-size: 24px;
      }
      :host([size='large']) button,
      :host([size='large']) a {
        width: 56px;
        height: 56px;
        font-size: 24px;
      }

      /* colors: default is MUI's grey surface, inherit keeps it transparent */
      :host([color='default']) :is(button, a) {
        background: #e0e0e0;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([color='default']) :is(button, a):hover {
        background: #d5d5d5;
      }
      :host([color='inherit']) :is(button, a) {
        background: transparent;
        color: inherit;
      }
      :host([color='primary']) :is(button, a) {
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([color='secondary']) :is(button, a) {
        background: var(--ui-color-secondary, #9c27b0);
        color: #fff;
      }
      :host([color='success']) :is(button, a) {
        background: var(--ui-color-success, #2e7d32);
        color: #fff;
      }
      :host([color='error']) :is(button, a) {
        background: var(--ui-color-error, #d32f2f);
        color: #fff;
      }
      :host([color='info']) :is(button, a) {
        background: var(--ui-color-info, #0288d1);
        color: #fff;
      }
      :host([color='warning']) :is(button, a) {
        background: var(--ui-color-warning, #ed6c02);
        color: #fff;
      }
      :host([color]:not([color='default']):not([color='inherit']))
        :is(button, a):hover {
        filter: brightness(0.92);
      }

      :host([variant='square']) :is(button, a) {
        border-radius: var(--ui-radius, 4px);
      }
      :host([variant='extended']) :is(button, a) {
        width: auto;
        height: 48px;
        padding: 0 20px;
        gap: 8px;
        border-radius: 24px;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.02857em;
      }
      :host([variant='extended']) ::slotted(svg) {
        width: 24px;
        height: 24px;
      }

      :host([disabled]) :is(button, a) {
        cursor: not-allowed;
        opacity: 0.5;
      }
      :host([disabled]) a {
        pointer-events: none;
      }

      ::slotted(svg) {
        width: 1em;
        height: 1em;
        fill: currentColor;
      }
    `];let le=ns;d("ui-fab",le);le.__docgenInfo={description:"Floating action button (MUI `Fab`). Renders a `<button>`, or an `<a>` when\n`href` is set. `label` supplies the accessible name (the slotted content is\nusually an icon).",methods:[],displayName:"UiFab"};const ls=class ls extends l{constructor(){super(...arguments),this.value="",this.selected=!1,this.disabled=!1,this.size="medium",this.color="primary"}_onClick(){this.disabled||this.dispatchEvent(new CustomEvent("toggle-select",{detail:{value:this.value,selected:!this.selected},bubbles:!0,composed:!0}))}render(){return o`
      <button
        part="button"
        type="button"
        ?disabled=${this.disabled}
        aria-pressed=${this.selected?"true":"false"}
        @click=${this._onClick}
      >
        <slot></slot>
      </button>
    `}};ls.properties={value:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},color:{type:String,reflect:!0}},ls.styles=[p,h`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      button {
        /* resolved color for the selected state; overridden per color prop */
        --toggle-color: var(--ui-color-primary, #1976d2);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 7px 12px;
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        border-radius: var(--ui-radius, 4px);
        background: transparent;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.75;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 150ms ease, border-color 150ms ease,
          color 150ms ease;
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      button:hover {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      :host([color='secondary']) button {
        --toggle-color: var(--ui-color-secondary, #9c27b0);
      }
      :host([color='error']) button {
        --toggle-color: var(--ui-color-error, #d32f2f);
      }
      :host([color='warning']) button {
        --toggle-color: var(--ui-color-warning, #ed6c02);
      }
      :host([color='info']) button {
        --toggle-color: var(--ui-color-info, #0288d1);
      }
      :host([color='success']) button {
        --toggle-color: var(--ui-color-success, #2e7d32);
      }
      :host([selected]) button {
        color: var(--toggle-color);
        border-color: var(--toggle-color);
        /* solid fallback first, color-mix() where supported */
        background: rgba(25, 118, 210, 0.12);
        background: color-mix(in srgb, var(--toggle-color) 12%, transparent);
      }
      :host([selected]) button:hover {
        background: rgba(25, 118, 210, 0.2);
        background: color-mix(in srgb, var(--toggle-color) 20%, transparent);
      }
      :host([size='small']) button {
        padding: 5px 11px;
        font-size: 12px;
      }
      :host([size='large']) button {
        padding: 8px 15px;
        font-size: 15px;
      }
      :host([disabled]) button {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
        pointer-events: none;
      }
    `];let ce=ls;d("ui-toggle-button",ce);ce.__docgenInfo={description:"A pressable on/off button (MUI `ToggleButton`). Selection is driven by the\nowning `ui-toggle-button-group` through the `selected` property (which is\nusually property-bound rather than attribute-bound), but the component also\nworks standalone.",methods:[],displayName:"UiToggleButton"};const zr=/^item-\d+$/,cs=class cs extends l{constructor(){super(...arguments),this.value="",this.exclusive=!1,this.orientation="horizontal",this.size="medium",this.disabled=!1,this.fullWidth=!1,this.color="primary",this._forcedDisabled=new Set,this._items=[]}connectedCallback(){super.connectedCallback(),this.addEventListener("toggle-select",this._onToggleSelect)}disconnectedCallback(){this.removeEventListener("toggle-select",this._onToggleSelect),super.disconnectedCallback()}firstUpdated(){this._syncChildren()}updated(t){(t.has("value")||t.has("size")||t.has("color")||t.has("disabled"))&&this._syncChildren()}_isSelected(t){return t?this.exclusive?this.value===t:this.value.split(" ").includes(t):!1}_collectItems(){return Array.from(this.children).filter(t=>{const e=t.getAttribute("slot");return e===null||zr.test(e)})}_syncChildren(){const t=this._collectItems();t.forEach((i,s)=>{const r=`item-${s}`;i.getAttribute("slot")!==r&&i.setAttribute("slot",r),i.size=this.size,i.color=this.color,i.selected=this._isSelected(i.value),this.disabled?i.disabled||(i.disabled=!0,this._forcedDisabled.add(i)):this._forcedDisabled.has(i)&&(i.disabled=!1,this._forcedDisabled.delete(i))});const e=t.length!==this._items.length;this._items=t,e&&this.requestUpdate()}_onSlotChange(){this._syncChildren()}_onToggleSelect(t){const i=t.detail.value;if(i){if(this.exclusive)this.value=this.value===i?"":i;else{const s=this.value.split(" ").filter(c=>c.length>0),r=s.indexOf(i);r>=0?s.splice(r,1):s.push(i),this.value=s.join(" ")}this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}}render(){return o`
      <div class="group" part="group" role="group">
        ${this._items.map((t,e)=>o`<slot
              name=${`item-${e}`}
              @slotchange=${this._onSlotChange}
            ></slot>`)}
        <slot @slotchange=${this._onSlotChange}></slot>
      </div>
    `}};cs.properties={value:{type:String,reflect:!0,converter:w},exclusive:{type:Boolean,reflect:!0},orientation:{type:String,reflect:!0},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},fullWidth:{type:Boolean,attribute:"full-width",reflect:!0},color:{type:String,reflect:!0}},cs.styles=[p,h`
      :host {
        display: inline-flex;
        vertical-align: middle;
        /* the container's rounding plus overflow:hidden clip the group's
           corners; the items themselves are squared off below */
        border-radius: var(--ui-radius, 4px);
        overflow: hidden;
      }
      :host([full-width]) {
        display: flex;
        width: 100%;
      }
      :host([orientation='vertical']) {
        flex-direction: column;
      }
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }
      ::slotted(*) {
        /* --ui-radius feeds the child's own internal button, whose corners
           read var(--ui-radius, 4px); the outer corners come from the host */
        --ui-radius: 0px;
        border-radius: 0;
      }

      /* Collapse the double border between adjacent buttons: every item after
         the first is pulled one pixel towards its neighbour and the host adds a
         matching leading inset so the first item still sits flush. */
      ::slotted(*) {
        margin-inline-start: -1px;
      }
      :host {
        padding-inline-start: 1px;
      }

      /* A vertical group collapses along the block axis instead. */
      :host([orientation='vertical']) ::slotted(*) {
        margin-inline-start: 0;
        margin-block-start: -1px;
      }
      :host([orientation='vertical']) {
        padding-inline-start: 0;
        padding-block-start: 1px;
      }
    `];let de=cs;d("ui-toggle-button-group",de);de.__docgenInfo={description:"Groups `ui-toggle-button`s and owns their selection (MUI\n`ToggleButtonGroup`). `exclusive` behaves like a radio group (a single\n`value`), otherwise `value` is a space separated list of the selected items.\n\n`size`, `color` and `disabled` propagate to the slotted buttons, the group\nassigns one slot name per child (item-N) so it can style/order them, and it\nre-emits a `change` event with `{ value }` after every toggle.",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiToggleButtonGroup"};let Mr=0;const H=class H extends l{constructor(){super(...arguments),this.options=[],this.value="",this.label="",this.placeholder="",this.freeSolo=!1,this.disabled=!1,this.error="",this.helperText="",this.name="",this.noOptionsText="No options",this.openOnFocus=!1,this._open=!1,this._inputValue="",this._highlighted=-1,this.internals=this.attachInternals(),this._inputId=`ui-autocomplete-${Mr++}`}get _input(){return this.renderRoot.querySelector("input")}get _listboxId(){return`${this._inputId}-listbox`}_optionId(t){return`${this._inputId}-option-${t}`}get _normalized(){return(this.options??[]).map(t=>typeof t=="string"?{value:t,label:t,disabled:!1}:{value:t.value,label:t.label,disabled:t.disabled??!1})}get _filtered(){const t=this._inputValue.trim().toLowerCase(),e=this._normalized;return t?e.filter(i=>i.label.toLowerCase().includes(t)):e}get _showingList(){return this._open&&!this.disabled}focus(t){this._input?.focus(t)}updated(t){if(t.has("value")){const e=this._normalized.find(s=>s.value===this.value),i=e?e.label:this.value;this._inputValue!==i&&(this._inputValue=i),this.internals.setFormValue(this.value)}}_onInput(t){const e=t.target;this._inputValue=e.value,this._open=!0,this._highlighted=-1,this.freeSolo&&(this.value=e.value,this.internals.setFormValue(this.value)),this.dispatchEvent(new CustomEvent("input-change",{detail:{value:e.value},bubbles:!0,composed:!0}))}_onFocus(){this.openOnFocus&&(this._open=!0)}_onBlur(){this._open=!1,this._highlighted=-1}_onKeydown(t){if(this.disabled)return;const e=this._filtered;if(t.key==="ArrowDown"){if(t.preventDefault(),!this._open){this._open=!0;return}if(e.length===0)return;this._highlighted=(this._highlighted+1)%e.length}else if(t.key==="ArrowUp"){if(t.preventDefault(),e.length===0)return;this._highlighted=(this._highlighted-1+e.length)%e.length}else if(t.key==="Enter"){if(!this._open||this._highlighted<0)return;const i=e[this._highlighted];if(!i)return;t.preventDefault(),i.disabled||this._select(i)}else if(t.key==="Escape"){if(!this._open)return;t.preventDefault(),this._open=!1,this._highlighted=-1}else t.key==="Tab"&&(this._open=!1,this._highlighted=-1)}_onListMouseDown(t){t.preventDefault()}_onArrowMouseDown(t){t.preventDefault(),!this.disabled&&(this._open=!this._open,this._open||(this._highlighted=-1))}_onOptionClick(t){const e=this._filtered[t];!e||e.disabled||this._select(e)}_select(t){this.value=t.value,this._inputValue=t.label,this._open=!1,this._highlighted=-1,this.internals.setFormValue(this.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=this._filtered,e=this._showingList;return o`
      ${this.label?o`<label class="field" for=${this._inputId}>${this.label}</label>`:n}
      <div class="field-wrapper">
        <input
          id=${this._inputId}
          part="input"
          type="text"
          role="combobox"
          autocomplete="off"
          .value=${this._inputValue}
          placeholder=${this.placeholder||n}
          ?disabled=${this.disabled}
          name=${this.name||n}
          aria-invalid=${this.error?"true":"false"}
          aria-expanded=${e?"true":"false"}
          aria-controls=${this._listboxId}
          aria-autocomplete="list"
          aria-activedescendant=${e&&this._highlighted>=0?this._optionId(this._highlighted):n}
          class=${this.error?"has-error":""}
          @input=${this._onInput}
          @keydown=${this._onKeydown}
          @focus=${this._onFocus}
          @blur=${this._onBlur}
        />
        <button
          type="button"
          class="arrow"
          part="arrow"
          tabindex="-1"
          aria-label="Toggle options"
          @mousedown=${this._onArrowMouseDown}
        >
          <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
        </button>
        ${e?o`<div
              class="listbox"
              part="listbox"
              role="listbox"
              id=${this._listboxId}
              style="box-shadow:${x(8)}"
              @mousedown=${this._onListMouseDown}
            >
              ${t.length===0?o`<div class="no-options">${this.noOptionsText}</div>`:t.map((i,s)=>o`<div
                        class=${this._highlighted===s?"option highlighted":"option"}
                        part="option"
                        role="option"
                        id=${this._optionId(s)}
                        aria-selected=${i.value===this.value?"true":"false"}
                        aria-disabled=${i.disabled?"true":"false"}
                        @click=${()=>this._onOptionClick(s)}
                      >
                        ${i.label}
                      </div>`)}
            </div>`:n}
      </div>
      ${this.error?o`<div class="error" role="alert">${this.error}</div>`:n}
      ${!this.error&&this.helperText?o`<div class="helper">${this.helperText}</div>`:n}
    `}};H.formAssociated=!0,H.properties={options:{type:Array},value:{type:String},label:{type:String},placeholder:{type:String},freeSolo:{type:Boolean,reflect:!0,attribute:"free-solo"},disabled:{type:Boolean,reflect:!0},error:{type:String},helperText:{type:String,attribute:"helper-text"},name:{type:String},noOptionsText:{type:String,attribute:"no-options-text"},openOnFocus:{type:Boolean,reflect:!0,attribute:"open-on-focus"},_open:{state:!0},_inputValue:{state:!0},_highlighted:{state:!0}},H.styles=[p,h`
      :host {
        display: block;
      }
      label.field {
        display: block;
        font-size: 13px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        margin-bottom: 4px;
      }
      .field-wrapper {
        position: relative;
      }
      input {
        box-sizing: border-box;
        width: 100%;
        font-family: inherit;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        border-radius: var(--ui-radius, 4px);
        padding: 10px 32px 10px 12px;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }
      input:focus {
        outline: none;
        border-color: var(--ui-color-primary, #1976d2);
        box-shadow: 0 0 0 1px var(--ui-color-primary, #1976d2);
      }
      input.has-error {
        border-color: var(--ui-color-error, #d32f2f);
      }
      :host([disabled]) input {
        background: var(--ui-color-bg-muted, #fafafa);
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
      .arrow {
        position: absolute;
        top: 50%;
        right: 8px;
        width: 20px;
        height: 20px;
        margin: 0;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        transform: translateY(-50%);
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.54));
        cursor: pointer;
      }
      :host([disabled]) .arrow {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
      .arrow svg {
        display: block;
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
      .listbox {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 1;
        margin: 0;
        padding: 4px 0;
        list-style: none;
        max-height: 300px;
        overflow: auto;
        background: var(--ui-color-bg-paper, #fff);
        border-radius: var(--ui-radius, 4px);
      }
      .option {
        padding: 8px 12px;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        cursor: pointer;
      }
      .option[aria-selected='true'] {
        background: var(--ui-color-action-selected, rgba(0, 0, 0, 0.08));
      }
      .option.highlighted {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      .option[aria-disabled='true'] {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
      .no-options {
        padding: 8px 12px;
        font-size: 14px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      .error {
        color: var(--ui-color-error, #d32f2f);
        font-size: 12px;
        margin-top: 4px;
      }
      .helper {
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        font-size: 12px;
        margin-top: 4px;
      }
    `];let he=H;d("ui-autocomplete",he);he.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[{name:"options",optional:!0,type:{name:"FocusOptions",alias:"FocusOptions"}}],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiAutocomplete"};const ds=class ds extends l{constructor(){super(...arguments),this.value=0,this.max=5,this.precision=1,this.size="medium",this.readOnly=!1,this.disabled=!1,this.name="",this.icon="★",this.emptyIcon="☆",this._hover=null}get _starIndices(){const t=[];for(let e=0;e<this.max;e+=1)t.push(e);return t}_clamp(t){return Math.max(0,Math.min(this.max,t))}_round(t){const e=this.precision>0?this.precision:1;return Math.round(Math.round(t/e)*e*1e6)/1e6}_starValue(t){const e=this.precision>0?this.precision:1;return this._clamp(Math.round((t+1)/e)*e)}_emit(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_onStarClick(t){if(this.disabled||this.readOnly)return;const e=this._starValue(t);this.value=e===this.value?0:e,this._emit()}_onStarHover(t){this.disabled||this.readOnly||(this._hover=this._starValue(t))}_onLeave(){this._hover=null}_onKeydown(t){if(this.disabled||this.readOnly)return;const e=this.precision>0?1/this.precision:1;t.key==="ArrowRight"||t.key==="ArrowUp"?(t.preventDefault(),this.value=this._clamp(this._round(this.value+e)),this._emit()):t.key==="ArrowLeft"||t.key==="ArrowDown"?(t.preventDefault(),this.value=this._clamp(this._round(this.value-e)),this._emit()):t.key==="Home"?(t.preventDefault(),this.value=0,this._emit()):t.key==="End"&&(t.preventDefault(),this.value=this.max,this._emit())}render(){const t=this._hover??this.value;return o`
      <div
        class="root"
        part="root"
        role="slider"
        aria-label=${this.name||"Rating"}
        aria-orientation="horizontal"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-readonly=${this.readOnly?"true":"false"}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?-1:0}
        @keydown=${this._onKeydown}
        @mouseleave=${this._onLeave}
      >
        ${this._starIndices.map(e=>{const i=e<t;return o`<button
            type="button"
            class=${i?"star filled":"star"}
            part="star"
            tabindex="-1"
            aria-label=${`${e+1} of ${this.max}`}
            @click=${()=>this._onStarClick(e)}
            @mouseenter=${()=>this._onStarHover(e)}
          >
            ${i?this.icon:this.emptyIcon}
          </button>`})}
      </div>
    `}};ds.properties={value:{type:Number,reflect:!0},max:{type:Number,reflect:!0},precision:{type:Number,reflect:!0},size:{type:String,reflect:!0},readOnly:{type:Boolean,reflect:!0,attribute:"read-only"},disabled:{type:Boolean,reflect:!0},name:{type:String},icon:{type:String},emptyIcon:{type:String},_hover:{state:!0}},ds.styles=[p,h`
      :host {
        display: inline-flex;
      }
      .root {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        border-radius: var(--ui-radius, 4px);
      }
      .root:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .star {
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        line-height: 1;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.4));
        cursor: pointer;
      }
      .star.filled {
        color: var(--ui-color-primary, #1976d2);
      }
      :host([size='small']) .star {
        font-size: 18px;
      }
      :host([size='large']) .star {
        font-size: 30px;
      }
      /* read-only keeps focus but is not interactive; disabled is muted too. */
      :host([read-only]) .star,
      :host([disabled]) .star {
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) .star.filled {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
      :host([disabled]) .star {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.32));
      }
    `];let pe=ds;d("ui-rating",pe);pe.__docgenInfo={description:"",methods:[],displayName:"UiRating"};const hs=class hs extends l{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.color="primary",this.size="medium",this.showValue=!1,this.markValues=[],this.label=""}get _percent(){const t=this.max-this.min;return t<=0?0:Math.max(0,Math.min(100,(this.value-this.min)/t*100))}_markPercent(t){const e=this.max-this.min;return e<=0?0:Math.max(0,Math.min(100,(t-this.min)/e*100))}_onInput(t){const e=t.target,i=Number(e.value);this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:{value:i,percent:this._percent},bubbles:!0,composed:!0}))}render(){const t=this._percent,e=this.markValues??[];return o`
      <div class="wrapper">
        <div
          class="slider"
          part="slider"
          style="--ui-slider-percent:${t}%;--ui-slider-color:${_(this.color)}"
        >
          <div class="rail" part="rail">
            <input
              part="input"
              type="range"
              .value=${this.value}
              min=${this.min}
              max=${this.max}
              step=${this.step}
              ?disabled=${this.disabled}
              aria-label=${this.label||"Slider"}
              @input=${this._onInput}
            />
            <div class="track" part="track"></div>
            <div class="thumb" part="thumb"></div>
          </div>
          ${e.length?o`<div class="marks" part="marks">
                ${e.map(i=>o`<span
                      class="mark"
                      style="left:${this._markPercent(i)}%"
                    >
                      <span class="dot"></span>
                      <span class="mark-label">${i}</span>
                    </span>`)}
              </div>`:n}
        </div>
        ${this.showValue?o`<span class="value" part="value">${this.value}</span>`:n}
      </div>
    `}};hs.properties={value:{type:Number,reflect:!0},min:{type:Number,reflect:!0},max:{type:Number,reflect:!0},step:{type:Number,reflect:!0},disabled:{type:Boolean,reflect:!0},color:{type:String,reflect:!0},size:{type:String,reflect:!0},showValue:{type:Boolean,reflect:!0,attribute:"show-value"},markValues:{type:Array,attribute:"mark-values"},label:{type:String}},hs.styles=[p,h`
      :host {
        display: block;
      }
      .wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .slider {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
      }
      .rail {
        position: relative;
        height: 4px;
        border-radius: 999px;
        background: var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      .track {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: var(--ui-slider-percent, 0%);
        border-radius: 999px;
        background: var(--ui-slider-color, var(--ui-color-primary, #1976d2));
        pointer-events: none;
      }
      .thumb {
        position: absolute;
        top: 50%;
        left: var(--ui-slider-percent, 0%);
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--ui-color-bg-paper, #fff);
        border: 2px solid var(--ui-slider-color, var(--ui-color-primary, #1976d2));
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
      /* The native range is invisible: it provides hit-testing + keyboard. */
      input[type='range'] {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        width: 100%;
        height: 24px;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        appearance: none;
        -webkit-appearance: none;
        opacity: 0;
        transform: translateY(-50%);
        cursor: pointer;
      }
      input[type='range']:focus-visible ~ .thumb {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([size='small']) .rail {
        height: 2px;
      }
      :host([size='small']) .thumb {
        width: 12px;
        height: 12px;
        border-width: 1px;
      }
      :host([disabled]) input[type='range'] {
        cursor: not-allowed;
      }
      :host([disabled]) .track {
        opacity: 0.5;
      }
      :host([disabled]) .thumb {
        border-color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        background: var(--ui-color-bg-muted, #fafafa);
      }
      .marks {
        position: relative;
        height: 22px;
      }
      .mark {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        font-size: 12px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        transform: translateX(-50%);
      }
      .dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.4));
      }
      .mark-label {
        line-height: 1;
      }
      .value {
        min-width: 2ch;
        font-size: 14px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        text-align: right;
      }
    `];let ue=hs;d("ui-slider",ue);ue.__docgenInfo={description:"",methods:[],displayName:"UiSlider"};const ps=class ps extends l{constructor(){super(...arguments),this.left=[],this.right=[],this.titles=["Choices","Chosen"],this.disabled=!1,this.showCounts=!1,this._checkedLeft=new Set,this._checkedRight=new Set}_items(t){return(t==="left"?this.left:this.right)??[]}_set(t){return t==="left"?this._checkedLeft:this._checkedRight}get _leftTitle(){return this.titles?.[0]??"Choices"}get _rightTitle(){return this.titles?.[1]??"Chosen"}_isChecked(t,e){return this._set(t).has(e)}_allChecked(t){const e=this._items(t),i=this._set(t);return e.length>0&&e.every(s=>i.has(s))}_someChecked(t){const e=this._set(t);return this._items(t).some(i=>e.has(i))}_toggle(t,e,i){const s=this._set(t);i?s.add(e):s.delete(e),this.requestUpdate()}_setAll(t,e){const i=this._set(t);this._items(t).forEach(s=>{e?i.add(s):i.delete(s)}),this.requestUpdate()}_move(t){const e=this._items(t),i=this._set(t),s=e.filter(c=>i.has(c));if(s.length===0)return;const r=e.filter(c=>!i.has(c));t==="left"?(this.left=r,this.right=[...this._items("right"),...s],this._checkedLeft=new Set):(this.right=r,this.left=[...this._items("left"),...s],this._checkedRight=new Set),this.dispatchEvent(new CustomEvent("change",{detail:{left:this.left,right:this.right},bubbles:!0,composed:!0}))}_onMoveRight(){this._move("left")}_onMoveLeft(){this._move("right")}_renderPanel(t){const e=this._items(t),i=t==="left"?this._leftTitle:this._rightTitle,s=this._allChecked(t),r=!s&&this._someChecked(t),c=e.length===0;return o`
      <div class="panel" part=${`panel-${t}`}>
        <div class="header" part="header">
          <input
            type="checkbox"
            part="select-all"
            aria-label=${`Select all ${i}`}
            .checked=${s}
            .indeterminate=${r}
            ?disabled=${this.disabled||c}
            @change=${u=>this._setAll(t,u.target.checked)}
          />
          <span class="title" part="title">${i}</span>
          ${this.showCounts?o`<span class="count" part="count">${e.length}</span>`:n}
        </div>
        <div class="list" part="list" role="group" aria-label=${i}>
          ${e.map(u=>o`<label class="item" part="item">
              <input
                type="checkbox"
                .checked=${this._isChecked(t,u)}
                ?disabled=${this.disabled}
                @change=${f=>this._toggle(t,u,f.target.checked)}
              />
              <span class="item-label">${u}</span>
            </label>`)}
        </div>
        <div class="footer" part="footer">
          <label class="toggle-all">
            <input
              type="checkbox"
              part="toggle-all"
              aria-label=${`Toggle all ${i}`}
              .checked=${s}
              .indeterminate=${r}
              ?disabled=${this.disabled||c}
              @change=${u=>this._setAll(t,u.target.checked)}
            />
            <span>Toggle all</span>
          </label>
        </div>
      </div>
    `}render(){return o`
      ${this._renderPanel("left")}
      <div class="controls" part="controls">
        <button
          type="button"
          class="move"
          part="move-right"
          aria-label="Move selected right"
          ?disabled=${this.disabled||!this._someChecked("left")}
          @click=${this._onMoveRight}
        >
          ›
        </button>
        <button
          type="button"
          class="move"
          part="move-left"
          aria-label="Move selected left"
          ?disabled=${this.disabled||!this._someChecked("right")}
          @click=${this._onMoveLeft}
        >
          ‹
        </button>
      </div>
      ${this._renderPanel("right")}
    `}};ps.properties={left:{type:Array},right:{type:Array},titles:{type:Array},disabled:{type:Boolean,reflect:!0},showCounts:{type:Boolean,reflect:!0,attribute:"show-counts"}},ps.styles=[p,h`
      :host {
        display: flex;
        align-items: center;
      }
      .panel {
        box-sizing: border-box;
        width: 200px;
        height: 230px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: var(--ui-color-bg-paper, #fff);
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        border-radius: var(--ui-radius, 4px);
      }
      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        font-size: 14px;
        font-weight: 500;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      .header .title {
        flex: 1;
        text-align: left;
      }
      .header .count {
        font-weight: 400;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      .list {
        flex: 1;
        overflow: auto;
        padding: 4px 0;
      }
      .item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 8px;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        cursor: pointer;
      }
      .item-label {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .footer {
        display: flex;
        justify-content: center;
        padding: 4px;
        border-top: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      .toggle-all {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        cursor: pointer;
      }
      input[type='checkbox'] {
        width: 16px;
        height: 16px;
        margin: 0;
        accent-color: var(--ui-color-primary, #1976d2);
      }
      .controls {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 0 8px;
      }
      .move {
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        line-height: 1;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-bg-paper, #fff);
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        border-radius: var(--ui-radius, 4px);
        cursor: pointer;
      }
      .move:hover:not(:disabled) {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      .move:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .move:disabled {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
      :host([disabled]) input[type='checkbox'] {
        cursor: not-allowed;
      }
      :host([disabled]) .item,
      :host([disabled]) .toggle-all {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
    `];let fe=ps;d("ui-transfer-list",fe);fe.__docgenInfo={description:"",methods:[],displayName:"UiTransferList"};const V=class V extends l{constructor(){super(...arguments),this.value="",this.placeholder="",this.minRows=1,this.maxRows=0,this.disabled=!1,this.readOnly=!1,this.name="",this.internals=this.attachInternals()}get _textarea(){return this.renderRoot.querySelector("textarea")}_resize(){const t=this._textarea;if(!t)return;t.style.height="auto";const e=getComputedStyle(t),i=parseFloat(e.lineHeight)||20,s=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),r=parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth);let c=t.scrollHeight+r;if(this.maxRows>0){const u=i*this.maxRows+s+r;c>u?(c=u,t.style.overflowY="auto"):t.style.overflowY="hidden"}else t.style.overflowY="hidden";t.style.height=`${c}px`}focus(t){this._textarea?.focus(t)}updated(t){const e=this._textarea;e&&(t.has("value")&&(e.value!==this.value&&(e.value=this.value),this.internals.setFormValue(this.value)),this._resize())}_onInput(t){const i=t.target.value;this.value=i,this.internals.setFormValue(i),this._resize(),this.dispatchEvent(new CustomEvent("input",{detail:{value:i},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0,composed:!0}))}render(){return o`
      <textarea
        part="textarea"
        rows=${this.minRows}
        .value=${this.value}
        placeholder=${this.placeholder||n}
        ?disabled=${this.disabled}
        ?readonly=${this.readOnly}
        name=${this.name||n}
        @input=${this._onInput}
      ></textarea>
    `}};V.formAssociated=!0,V.properties={value:{type:String},placeholder:{type:String},minRows:{type:Number,attribute:"min-rows"},maxRows:{type:Number,attribute:"max-rows"},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,reflect:!0,attribute:"read-only"},name:{type:String}},V.styles=[p,h`
      :host {
        display: block;
      }
      textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        font-family: inherit;
        font-size: 14px;
        line-height: 1.4375em;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        border-radius: var(--ui-radius, 4px);
        padding: 10px 12px;
        resize: none;
        overflow-y: hidden;
        transition: border-color 120ms ease, box-shadow 120ms ease;
      }
      textarea:focus {
        outline: none;
        border-color: var(--ui-color-primary, #1976d2);
        box-shadow: 0 0 0 1px var(--ui-color-primary, #1976d2);
      }
      :host([disabled]) textarea {
        background: var(--ui-color-bg-muted, #fafafa);
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
      }
    `];let me=V;d("ui-textarea-autosize",me);me.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[{name:"options",optional:!0,type:{name:"FocusOptions",alias:"FocusOptions"}}],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiTextareaAutosize"};const us=class us extends l{constructor(){super(...arguments),this.fullWidth=!1,this.disabled=!1,this.error=!1,this.required=!1,this.size="medium",this.variant="outlined"}render(){const t=`--ui-form-error:${this.error?1:0};--ui-form-disabled:${this.disabled?1:0};`;return o`
      <div class="children" part="root" style=${t}>
        <slot></slot>
      </div>
    `}};us.properties={fullWidth:{type:Boolean,reflect:!0,attribute:"full-width"},disabled:{type:Boolean,reflect:!0},error:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},variant:{type:String,reflect:!0}},us.styles=[p,h`
      :host {
        display: inline-block;
        vertical-align: top;
      }
      :host([full-width]) {
        display: block;
        width: 100%;
      }
      .children {
        margin: 8px 0 4px;
      }
      :host([full-width]) .children ::slotted(*) {
        display: block;
        width: 100%;
      }
      :host([disabled]) .children ::slotted(*) {
        pointer-events: none;
      }
    `];let be=us;d("ui-form-control",be);be.__docgenInfo={description:"Layout/state wrapper for a single form field. It is intentionally thin: it\nonly provides block/inline sizing and exposes the `error`/`disabled` state to\nslotted children through the inherited custom properties\n`--ui-form-error` / `--ui-form-disabled` (children may branch on them).",methods:[],displayName:"UiFormControl"};const fs=class fs extends l{constructor(){super(...arguments),this.focused=!1,this.required=!1,this.error=!1,this.disabled=!1,this.size="medium"}render(){return o`
      <label part="label">
        <slot></slot>
        ${this.required?o`<span class="asterisk" part="asterisk" aria-hidden="true"> *</span>`:n}
      </label>
    `}};fs.properties={focused:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},error:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}},fs.styles=[p,h`
      :host {
        display: block;
      }
      label {
        display: block;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.4375em;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        margin-bottom: 4px;
      }
      :host([size='small']) label {
        font-size: 12px;
      }
      :host([focused]) label {
        color: var(--ui-color-primary, #1976d2);
      }
      :host([error]) label {
        color: var(--ui-color-error, #d32f2f);
      }
      :host([disabled]) label {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
      .asterisk {
        color: inherit;
      }
      :host([error]) .asterisk {
        color: var(--ui-color-error, #d32f2f);
      }
    `];let ge=fs;d("ui-form-label",ge);ge.__docgenInfo={description:"A label above a form field, mirroring MUI's `FormLabel` typography\n(13px / 500). `focused`/`error`/`disabled` drive the colour; `required`\nappends the MUI asterisk.",methods:[],displayName:"UiFormLabel"};const ms=class ms extends l{constructor(){super(...arguments),this.error=!1,this.disabled=!1}render(){return o`<p part="helper"><slot></slot></p>`}};ms.properties={error:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}},ms.styles=[p,h`
      :host {
        display: block;
      }
      p {
        margin: 3px 0 0;
        font-size: 12px;
        line-height: 1.66;
        letter-spacing: 0.03333em;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([error]) p {
        color: var(--ui-color-error, #d32f2f);
      }
      :host([disabled]) p {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
    `];let ve=ms;d("ui-form-helper-text",ve);ve.__docgenInfo={description:"Muted helper (or error) text rendered below a field, matching MUI's\n`FormHelperText` (12px caption).",methods:[],displayName:"UiFormHelperText"};const bs=class bs extends l{constructor(){super(...arguments),this.row=!1}render(){return o`<slot></slot>`}};bs.properties={row:{type:Boolean,reflect:!0}},bs.styles=[p,h`
      :host {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      :host([row]) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
      }
    `];let ye=bs;d("ui-form-group",ye);ye.__docgenInfo={description:"Stacks a set of controls (checkbox/radio/switch) vertically, or wraps them\nin a row with MUI's `row` gap.",methods:[],displayName:"UiFormGroup"};const gs=class gs extends l{constructor(){super(...arguments),this.label="",this.required=!1,this.disabled=!1,this.error=!1,this.controlPosition="end"}render(){const t=o`<slot name="control"></slot>`,e=o`
      <span class="label" part="label">
        ${this.label?this.label:o`<slot></slot>`}
        ${this.required?o`<span class="asterisk" part="asterisk" aria-hidden="true"> *</span>`:n}
      </span>
    `,i=this.controlPosition==="start"||this.controlPosition==="top";return o`
      <label part="root">
        ${i?t:n} ${e}
        ${i?n:t}
      </label>
    `}};gs.properties={label:{type:String},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},error:{type:Boolean,reflect:!0},controlPosition:{type:String,reflect:!0,attribute:"control-position"}},gs.styles=[p,h`
      :host {
        display: inline-flex;
      }
      label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 16px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([control-position='top']) label,
      :host([control-position='bottom']) label {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      :host([disabled]) label {
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        cursor: not-allowed;
      }
      .asterisk {
        color: var(--ui-color-error, #d32f2f);
      }
    `];let xe=gs;d("ui-form-control-label",xe);xe.__docgenInfo={description:"Pairs a real control (checkbox/switch/radio slotted into the `control` slot)\nwith its label text. `controlPosition` mirrors MUI's `labelPlacement`, read\nas the position of the control: `start`/`top` put the control first,\n`end`/`bottom` put it last; `top`/`bottom` stack vertically.",methods:[],displayName:"UiFormControlLabel"};const vs=class vs extends l{constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.error=!1,this.focused=!1,this.size="medium",this.variant="outlined",this.shrink=!1}render(){return o`
      <label part="label">
        <slot></slot>
        ${this.required?o`<span class="asterisk" part="asterisk" aria-hidden="true"> *</span>`:n}
      </label>
    `}};vs.properties={required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},error:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},variant:{type:String,reflect:!0},shrink:{type:Boolean,reflect:!0}},vs.styles=[p,h`
      :host {
        display: block;
      }
      label {
        display: block;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.4375em;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        margin-bottom: 4px;
      }
      :host([size='small']) label {
        font-size: 11px;
      }
      :host([focused]) label,
      :host([shrink]) label {
        color: var(--ui-color-primary, #1976d2);
      }
      :host([error]) label {
        color: var(--ui-color-error, #d32f2f);
      }
      :host([disabled]) label {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
      }
      .asterisk {
        color: var(--ui-color-error, #d32f2f);
      }
    `];let we=vs;d("ui-input-label",we);we.__docgenInfo={description:"A small (12px / 500) field label that sits above its input — MUI's\n`InputLabel` semantics (a `<label>` for an input) without the floating\noutline animation. `focused`/`shrink` turn it primary; `error` error-coloured.",methods:[],displayName:"UiInputLabel"};const ys=class ys extends l{constructor(){super(...arguments),this.position="start"}render(){return o`<slot></slot>`}};ys.properties={position:{type:String,reflect:!0}},ys.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 0 12px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        white-space: nowrap;
        font-size: 14px;
      }
      :host([position='start']) {
        margin-right: -8px;
      }
      :host([position='end']) {
        margin-left: -8px;
      }
    `];let ke=ys;d("ui-input-adornment",ke);ke.__docgenInfo={description:"A prefix/suffix (text, icon or button) shown beside an input. Pulls itself\ntoward the field edge with a negative margin so it can sit next to an\n`ui-input` inside a flex wrapper.",methods:[],displayName:"UiInputAdornment"};const xs=class xs extends l{constructor(){super(...arguments),this.open=!1,this.invisible=!1,this._onClick=()=>{this.dispatchEvent(new CustomEvent("backdrop-click",{bubbles:!0,composed:!0}))}}render(){return this.open?o`
      <div class="scrim" part="scrim" @click=${this._onClick}>
        <slot></slot>
      </div>
    `:n}};xs.properties={open:{type:Boolean,reflect:!0},invisible:{type:Boolean,reflect:!0}},xs.styles=[p,h`
      :host {
        display: contents;
      }
      .scrim {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--ui-color-backdrop, rgba(0, 0, 0, 0.5));
        /* One step below the modal layer so panels stack above the scrim. */
        z-index: calc(var(--ui-zindex-modal, 1300) - 1);
      }
      :host([invisible]) .scrim {
        background: transparent;
      }
    `];let _e=xs;d("ui-backdrop",_e);_e.__docgenInfo={description:"MUI `Backdrop`: a full-screen scrim. While closed the host is invisible to\nlayout (`display: contents`); while open it renders a fixed scrim that is\nflex-centred so slotted content sits on top of it.",methods:[],displayName:"UiBackdrop"};const ws=class ws extends l{constructor(){super(...arguments),this.open=!1,this.closeOnBackdropClick=!0,this.closeOnEsc=!0,this.label="",this._previouslyFocused=null,this._closeReason="escapeKeyDown",this._onKeydown=t=>{t.key==="Escape"&&this.open&&this.closeOnEsc&&(this._closeReason="escapeKeyDown",this.open=!1)},this._onBackdrop=t=>{t.target===t.currentTarget&&this.closeOnBackdropClick&&(this._closeReason="backdropClick",this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown),this.open&&(document.body.style.overflow="")}updated(t){if(t.has("open"))if(this.open){const e=document.activeElement;this._previouslyFocused=e instanceof HTMLElement?e:null,document.body.style.overflow="hidden",this.renderRoot.querySelector(".panel")?.focus(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))}else document.body.style.overflow="",this._previouslyFocused?.focus(),this._previouslyFocused=null,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0,detail:{reason:this._closeReason}}))}render(){return this.open?o`
      <div
        class="overlay"
        part="overlay"
        style="z-index:${z("modal")}"
        @click=${this._onBackdrop}
      >
        <div
          class="panel"
          part="panel"
          role="dialog"
          aria-modal="true"
          aria-label=${this.label||n}
          tabindex="-1"
          style="box-shadow:${x(24)}"
        >
          <slot></slot>
        </div>
      </div>
    `:n}};ws.properties={open:{type:Boolean,reflect:!0},closeOnBackdropClick:{type:Boolean,attribute:"close-on-backdrop-click",reflect:!0},closeOnEsc:{type:Boolean,attribute:"close-on-esc",reflect:!0},label:{type:String}},ws.styles=[p,h`
      :host {
        display: contents;
      }
      .overlay {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--ui-color-backdrop, rgba(0, 0, 0, 0.5));
      }
      .panel {
        background: var(--ui-color-bg-paper, #fff);
        border-radius: var(--ui-radius, 4px);
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 48px);
        overflow: auto;
        outline: none;
      }
    `];let $e=ws;d("ui-modal",$e);$e.__docgenInfo={description:"MUI `Modal`: a fixed, centred overlay with a paper panel. Locks body scroll\nwhile open, traps focus on the panel, and restores the previously focused\nelement on close.",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiModal"};const ks=class ks extends l{constructor(){super(...arguments),this.open=!1,this.placement="bottom",this.offset=8,this.withArrow=!1,this.dismissible=!0,this._closeReason="escapeKeyDown",this._onKeydown=t=>{t.key==="Escape"&&this.open&&this.dismissible&&(this._closeReason="escapeKeyDown",this.open=!1)},this._onDocumentClick=t=>{!this.open||!this.dismissible||t.composedPath().includes(this)||(this._closeReason="backdropClick",this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown),document.addEventListener("click",this._onDocumentClick,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown),document.removeEventListener("click",this._onDocumentClick,!0)}updated(t){t.has("open")&&(this.open?this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0,detail:{reason:this._closeReason}})))}render(){return o`
      <slot name="anchor"></slot>
      ${this.open?o`
            <div
              class="panel"
              part="panel"
              role="dialog"
              style="--pop-offset:${this.offset}px;box-shadow:${x(8)};z-index:${z("modal")}"
            >
              ${this.withArrow?o`<span class="arrow" part="arrow"></span>`:n}
              <slot></slot>
            </div>
          `:n}
    `}};ks.properties={open:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},offset:{type:Number,reflect:!0},withArrow:{type:Boolean,attribute:"with-arrow",reflect:!0},dismissible:{type:Boolean,reflect:!0}},ks.styles=[p,h`
      :host {
        display: inline-block;
        position: relative;
      }
      .panel {
        position: absolute;
        background: var(--ui-color-bg-paper, #fff);
        border-radius: var(--ui-radius, 4px);
        padding: 8px 0;
        min-width: 120px;
      }
      .arrow {
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--ui-color-bg-paper, #fff);
        transform: rotate(45deg);
      }
      :host([placement='bottom']) .panel {
        top: calc(100% + var(--pop-offset));
        left: 50%;
        transform: translateX(-50%);
      }
      :host([placement='bottom-start']) .panel {
        top: calc(100% + var(--pop-offset));
        left: 0;
      }
      :host([placement='bottom-end']) .panel {
        top: calc(100% + var(--pop-offset));
        right: 0;
      }
      :host([placement='top']) .panel {
        bottom: calc(100% + var(--pop-offset));
        left: 50%;
        transform: translateX(-50%);
      }
      :host([placement='top-start']) .panel {
        bottom: calc(100% + var(--pop-offset));
        left: 0;
      }
      :host([placement='top-end']) .panel {
        bottom: calc(100% + var(--pop-offset));
        right: 0;
      }
      :host([placement='left']) .panel {
        right: calc(100% + var(--pop-offset));
        top: 0;
      }
      :host([placement='right']) .panel {
        left: calc(100% + var(--pop-offset));
        top: 0;
      }
      :host([placement='bottom']) .arrow,
      :host([placement='top']) .arrow {
        left: 50%;
        margin-left: -4px;
      }
      :host([placement='bottom']) .arrow {
        top: -4px;
      }
      :host([placement='top']) .arrow {
        bottom: -4px;
      }
      :host([placement='bottom-start']) .arrow,
      :host([placement='top-start']) .arrow {
        left: 16px;
      }
      :host([placement='bottom-start']) .arrow,
      :host([placement='top-start']) .arrow {
        left: 16px;
      }
      :host([placement='bottom-end']) .arrow,
      :host([placement='top-end']) .arrow {
        right: 16px;
      }
      :host([placement='bottom-start']) .arrow,
      :host([placement='bottom-end']) .arrow {
        top: -4px;
      }
      :host([placement='top-start']) .arrow,
      :host([placement='top-end']) .arrow {
        bottom: -4px;
      }
      :host([placement='left']) .arrow,
      :host([placement='right']) .arrow {
        top: 16px;
      }
      :host([placement='left']) .arrow {
        right: -4px;
      }
      :host([placement='right']) .arrow {
        left: -4px;
      }
    `];let Se=ks;d("ui-popover",Se);Se.__docgenInfo={description:"MUI `Popover`: an absolutely positioned panel anchored to the host element\n(the host is the positioning context). Closes on Escape and on an outside\nclick when `dismissible`.",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiPopover"};const _s=class _s extends l{constructor(){super(...arguments),this.open=!1,this.anchorEl="",this.placement="bottom",this.offset=8,this.modifiersFlip=!0,this._left=0,this._top=0,this._onScroll=()=>{this._position()},this._onResize=()=>{this._position()}}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._onScroll,!0),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this._onScroll,!0),window.removeEventListener("resize",this._onResize)}updated(t){if(t.has("open")){this.open?(this._position(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))):this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}));return}this.open&&(t.has("placement")||t.has("anchorEl")||t.has("offset")||t.has("modifiersFlip"))&&this._position()}_coords(t,e,i,s){const r=this.offset;switch(t){case"bottom":return{left:e.left+e.width/2-i/2,top:e.bottom+r};case"bottom-start":return{left:e.left,top:e.bottom+r};case"bottom-end":return{left:e.right-i,top:e.bottom+r};case"top":return{left:e.left+e.width/2-i/2,top:e.top-s-r};case"top-start":return{left:e.left,top:e.top-s-r};case"top-end":return{left:e.right-i,top:e.top-s-r};case"left":return{left:e.left-i-r,top:e.top+e.height/2-s/2};case"right":return{left:e.right+r,top:e.top+e.height/2-s/2};default:return{left:e.left,top:e.bottom+r}}}_flip(t,e,i,s){const r=window.innerHeight,c=window.innerWidth;if(t.startsWith("bottom")){if(this._coords(t,e,i,s).top+s>r)return t.replace("bottom","top")}else if(t.startsWith("top")){if(this._coords(t,e,i,s).top<0)return t.replace("top","bottom")}else if(t==="left"){if(this._coords("left",e,i,s).left<0)return"right"}else if(t==="right"&&this._coords("right",e,i,s).left+i>c)return"left";return t}_position(){if(!this.open||!this.anchorEl)return;const t=document.getElementById(this.anchorEl);if(!t)return;const e=this.renderRoot.querySelector(".panel"),i=t.getBoundingClientRect(),s=e?.offsetWidth??0,r=e?.offsetHeight??0,c=this.modifiersFlip?this._flip(this.placement,i,s,r):this.placement,{left:u,top:f}=this._coords(c,i,s,r);(u!==this._left||f!==this._top)&&(this._left=u,this._top=f,this.requestUpdate())}render(){return this.open?o`
      <div
        class="panel"
        part="panel"
        style="left:${this._left}px;top:${this._top}px;box-shadow:${x(8)};z-index:${z("modal")}"
      >
        <slot></slot>
      </div>
    `:n}};_s.properties={open:{type:Boolean,reflect:!0},anchorEl:{type:String,attribute:"anchor-el"},placement:{type:String,reflect:!0},offset:{type:Number,reflect:!0},modifiersFlip:{type:Boolean,attribute:"modifiers-flip",reflect:!0}},_s.styles=[p,h`
      :host {
        display: contents;
      }
      .panel {
        position: fixed;
        top: 0;
        left: 0;
        background: var(--ui-color-bg-paper, #fff);
        border-radius: var(--ui-radius, 4px);
        padding: 8px 0;
        min-width: 120px;
      }
    `];let Ce=_s;d("ui-popper",Ce);Ce.__docgenInfo={description:"MUI `Popper`: a `position: fixed` panel positioned from the `getBoundingClientRect()`\nof an anchor element (looked up by id in the document). Repositions on scroll\n(capture) and resize while open, and can flip to the opposite placement when\nit would overflow the viewport (`modifiersFlip`).",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiPopper"};const $s=class $s extends l{constructor(){super(...arguments),this.variant="text",this.animation="pulse",this.width="",this.height="",this.lines=1}_boxStyle(){let t="";return this.width&&(t+=`width:${this.width};`),this.height&&(t+=`height:${this.height};`),t}render(){const t=this._boxStyle();if(this.variant==="text"&&this.lines>1){const e=Array.from({length:this.lines},(i,s)=>{const c=s===this.lines-1?`width:80%;${t}`:t;return o`<div
          class="skel"
          part="skeleton"
          style=${c}
        ></div>`});return o`${e}<slot></slot>`}return o`
      <div class="skel" part="skeleton" style=${t}></div>
      <slot></slot>
    `}};$s.properties={variant:{type:String,reflect:!0},animation:{type:String,reflect:!0},width:{type:String},height:{type:String},lines:{type:Number}},$s.styles=[p,h`
      :host {
        display: block;
      }
      .skel {
        background: rgba(0, 0, 0, 0.11);
        position: relative;
        overflow: hidden;
      }
      :host([variant='text']) .skel {
        height: 1.2em;
        border-radius: 4px;
        transform: scaleY(0.6);
        transform-origin: center;
        margin-block: 4px;
      }
      :host([variant='rectangular']) .skel {
        border-radius: 0;
      }
      :host([variant='rounded']) .skel {
        border-radius: var(--ui-radius, 4px);
      }
      :host([variant='circular']) .skel {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      :host([animation='pulse']) .skel {
        animation: ui-skeleton-pulse 1.5s ease-in-out 0.5s infinite;
      }
      @keyframes ui-skeleton-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
      :host([animation='wave']) .skel::after {
        content: '';
        position: absolute;
        inset: 0;
        transform: translateX(-100%);
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
        );
        animation: ui-skeleton-wave 1.6s linear 0.5s infinite;
      }
      @keyframes ui-skeleton-wave {
        0% {
          transform: translateX(-100%);
        }
        60% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .skel,
        :host([animation='wave']) .skel::after {
          animation: none;
        }
      }
    `];let Ee=$s;d("ui-skeleton",Ee);Ee.__docgenInfo={description:"MUI `Skeleton`: an animated placeholder. `variant='text'` renders stacked\nbars (the last one 80% wide); other variants render a single block. Children\nare ignored (the slot exists only so consumers may inject extra markup).",methods:[],displayName:"UiSkeleton"};const Ss=class Ss extends l{constructor(){super(...arguments),this.open=!1,this.message="",this.action="",this.autoHideDuration=6e3,this.anchorVertical="bottom",this.anchorHorizontal="center",this._closeReason="timeout",this._onKeydown=t=>{t.key==="Escape"&&this.open&&(this._closeReason="escapeKeyDown",this.open=!1)},this._onAction=()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,composed:!0})),this._closeReason="action",this.open=!1}}_clearTimer(){this._timer!==void 0&&(window.clearTimeout(this._timer),this._timer=void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown),this._clearTimer()}updated(t){if(!(!t.has("open")&&!t.has("autoHideDuration"))){if(this._clearTimer(),this.open){this.autoHideDuration>0&&(this._timer=window.setTimeout(()=>{this._closeReason="timeout",this.open=!1},this.autoHideDuration));return}t.has("open")&&this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0,detail:{reason:this._closeReason}}))}}render(){return this.open?o`
      <div
        class="snackbar"
        part="snackbar"
        role="alert"
        style="box-shadow:${x(6)};z-index:${z("snackbar")}"
      >
        <div class="msg" part="message"><slot>${this.message}</slot></div>
        ${this.action?o`<button
              class="action"
              part="action"
              type="button"
              @click=${this._onAction}
            >
              ${this.action}
            </button>`:o`<slot name="action"></slot>`}
      </div>
    `:n}};Ss.properties={open:{type:Boolean,reflect:!0},message:{type:String},action:{type:String},autoHideDuration:{type:Number,attribute:"auto-hide-duration",reflect:!0},anchorVertical:{type:String,attribute:"anchor-vertical",reflect:!0},anchorHorizontal:{type:String,attribute:"anchor-horizontal",reflect:!0}},Ss.styles=[p,h`
      :host {
        display: contents;
      }
      .snackbar {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        background: #323232;
        color: #fff;
        border-radius: var(--ui-radius, 4px);
        padding: 6px 16px;
        min-width: 288px;
        max-width: 568px;
        font-size: 14px;
        box-sizing: border-box;
      }
      .msg {
        flex: 1;
        min-width: 0;
      }
      .action {
        flex: none;
        background: none;
        border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        color: var(--ui-color-primary-light, #42a5f5);
        cursor: pointer;
        padding: 4px 8px;
        margin-right: -8px;
      }
      .action:focus-visible {
        outline: 2px solid var(--ui-color-primary-light, #42a5f5);
        outline-offset: 2px;
      }
      :host([anchor-vertical='top']) .snackbar {
        top: 24px;
        bottom: auto;
      }
      :host([anchor-vertical='bottom']) .snackbar {
        bottom: 24px;
        top: auto;
      }
      :host([anchor-horizontal='left']) .snackbar {
        left: 24px;
        right: auto;
      }
      :host([anchor-horizontal='right']) .snackbar {
        right: 24px;
        left: auto;
      }
      :host([anchor-horizontal='center']) .snackbar {
        left: 50%;
        right: auto;
        transform: translateX(-50%);
      }
    `];let ze=Ss;d("ui-snackbar",ze);ze.__docgenInfo={description:"MUI `Snackbar`: a fixed toast panel anchored to one of six positions. Auto\nhides after `autoHideDuration` ms while open and closes on Escape. The\naction, when provided, is a text button that emits `action-click` and then\ncloses with reason `action`.",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiSnackbar"};const Cs=class Cs extends l{constructor(){super(...arguments),this.value=-1,this.variant="",this.color="primary",this.size=40,this.thickness=3.6,this.label=""}_resolvedVariant(){return this.variant==="determinate"||this.variant==="indeterminate"?this.variant:this.value>=0?"determinate":"indeterminate"}render(){const t=this._resolvedVariant()==="indeterminate",e=(this.size-this.thickness)/2,i=2*Math.PI*e,s=Math.min(100,Math.max(0,this.value)),r=t?`${i*.8} ${i*.2}`:`${i}`,c=t?0:i*(1-s/100);return o`
      <svg
        part="svg"
        class=${t?"indeterminate":""}
        width=${this.size}
        height=${this.size}
        viewBox="0 0 44 44"
        role="progressbar"
        aria-label=${this.label||n}
        aria-valuemin=${t?n:0}
        aria-valuemax=${t?n:100}
        aria-valuenow=${t?n:s}
        aria-valuetext=${this.label||n}
      >
        ${t?o`<circle
              cx="22"
              cy="22"
              r=${e}
              fill="none"
              stroke=${_("secondary")}
              stroke-width=${this.thickness}
              opacity="0.5"
            ></circle>`:n}
        <circle
          class="circle"
          part="circle"
          cx="22"
          cy="22"
          r=${e}
          fill="none"
          stroke=${_(this.color)}
          stroke-width=${this.thickness}
          stroke-linecap="round"
          stroke-dasharray=${r}
          stroke-dashoffset=${c}
        ></circle>
      </svg>
    `}};Cs.properties={value:{type:Number},variant:{type:String},color:{type:String,reflect:!0},size:{type:Number,reflect:!0},thickness:{type:Number,reflect:!0},label:{type:String}},Cs.styles=[p,h`
      :host {
        display: inline-flex;
      }
      svg {
        display: block;
      }
      .circle {
        transition: stroke-dashoffset 200ms ease;
      }
      .indeterminate {
        animation: ui-circular-rotate 1.4s linear infinite;
      }
      .indeterminate .circle {
        animation: ui-circular-dash 1.4s ease-in-out infinite;
      }
      @keyframes ui-circular-rotate {
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes ui-circular-dash {
        0% {
          stroke-dasharray: 1px, 200px;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 100px, 200px;
          stroke-dashoffset: -15px;
        }
        100% {
          stroke-dasharray: 100px, 200px;
          stroke-dashoffset: -125px;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .indeterminate,
        .indeterminate .circle {
          animation: none;
        }
      }
    `];let Me=Cs;d("ui-circular-progress",Me);Me.__docgenInfo={description:"MUI `CircularProgress`: an SVG spinner. `value >= 0` (or an explicit\n`variant='determinate'`) draws a determinate arc from the percentage;\notherwise the arc spins and pulses like MUI's indeterminate mode.",methods:[],displayName:"UiCircularProgress"};const Es=class Es extends l{constructor(){super(...arguments),this.value=0,this.valueBuffer=-1,this.variant="indeterminate",this.color="primary"}render(){const t=this.variant==="indeterminate",e=_(this.color),i=Math.min(100,Math.max(0,this.value)),s=Math.min(100,Math.max(0,this.valueBuffer));return o`
      <div
        class="track"
        part="track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${t?n:i}
      >
        ${this.variant==="buffer"?o`<div
              class="buffer"
              part="buffer"
              style="width:calc(${s}% - ${i}%);background:${e}"
            ></div>`:n}
        <div
          class="bar"
          part="bar"
          style=${t?`background:${e}`:`width:${i}%;background:${e}`}
        ></div>
        ${t?o`<div
              class="bar2"
              part="bar2"
              style="background:${e}"
            ></div>`:n}
      </div>
    `}};Es.properties={value:{type:Number,reflect:!0},valueBuffer:{type:Number,attribute:"value-buffer",reflect:!0},variant:{type:String,reflect:!0},color:{type:String,reflect:!0}},Es.styles=[p,h`
      :host {
        display: block;
        width: 100%;
      }
      .track {
        position: relative;
        width: 100%;
        height: 4px;
        border-radius: 999px;
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.12));
        overflow: hidden;
      }
      .bar,
      .bar2,
      .buffer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
      }
      .bar {
        transition: width 200ms ease;
      }
      .buffer {
        opacity: 0.4;
      }
      :host([variant='indeterminate']) .bar {
        width: auto;
        right: 0;
        transition: none;
        animation: ui-linear-bar1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
          infinite;
      }
      :host([variant='indeterminate']) .bar2 {
        right: 0;
        animation: ui-linear-bar2 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
          infinite;
      }
      @keyframes ui-linear-bar1 {
        0% {
          left: -35%;
          right: 100%;
        }
        60% {
          left: 100%;
          right: -90%;
        }
        100% {
          left: 100%;
          right: -90%;
        }
      }
      @keyframes ui-linear-bar2 {
        0% {
          left: -200%;
          right: 100%;
        }
        60% {
          left: 107%;
          right: -8%;
        }
        100% {
          left: 107%;
          right: -8%;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .bar,
        .bar2 {
          animation: none;
        }
      }
    `];let Ne=Es;d("ui-linear-progress",Ne);Ne.__docgenInfo={description:"MUI `LinearProgress`: a 4px track with a coloured bar. `determinate` fills\nby percentage, `buffer` adds a faded secondary bar, and `indeterminate`\nruns MUI's two-bar animation.",methods:[],displayName:"UiLinearProgress"};const zs=class zs extends l{constructor(){super(...arguments),this.expanded=!1,this.disabled=!1,this.square=!1,this.disableGutters=!1,this.elevation=1,this.headingLevel=3,this._id=`ui-accordion-${Math.random().toString(36).slice(2,8)}`,this._onSummary=()=>{this.disabled||(this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{expanded:this.expanded}})))}}render(){const t=io(`h${this.headingLevel}`),e=`${this._id}-summary`,i=`${this._id}-details`,s=this.elevation>0?`box-shadow:${x(this.elevation)}`:"";return Do`
      <div class="root" part="root" style=${s}>
        <${t} class="heading" part="heading">
          <button
            class="summary"
            part="summary-button"
            id=${e}
            type="button"
            aria-expanded=${this.expanded?"true":"false"}
            aria-controls=${i}
            ?disabled=${this.disabled}
            @click=${this._onSummary}
          >
            <span class="summary-content" part="summary"
              ><slot name="summary"></slot
            ></span>
            <span class="icon" part="expand-icon" aria-hidden="true"
              ><slot name="expand-icon">⌄</slot></span
            >
          </button>
        </${t}>
        <div
          class="details"
          part="details"
          id=${i}
          role="region"
          aria-labelledby=${e}
          ?hidden=${!this.expanded}
        >
          <slot></slot>
        </div>
      </div>
    `}};zs.properties={expanded:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},square:{type:Boolean,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0},elevation:{type:Number,reflect:!0},headingLevel:{type:Number,attribute:"heading-level"}},zs.styles=[p,h`
      :host {
        display: block;
      }
      .root {
        background: var(--ui-color-bg-paper, #fff);
        border-radius: var(--ui-radius, 4px);
        overflow: hidden;
      }
      :host([square]) .root {
        border-radius: 0;
      }
      :host([elevation='0']) .root {
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      .heading {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
      }
      .summary {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        min-height: 48px;
        padding: 0 16px;
        border: none;
        background: transparent;
        font-family: inherit;
        font-size: 15px;
        font-weight: 400;
        text-align: left;
        cursor: pointer;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([disable-gutters]) .summary {
        padding: 0;
      }
      .summary:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: -2px;
      }
      :host([disabled]) .summary {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: default;
      }
      .summary-content {
        flex: 1;
        min-width: 0;
      }
      .icon {
        display: inline-flex;
        transition: transform 150ms ease;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([expanded]) .icon {
        transform: rotate(180deg);
      }
      .details {
        padding: 8px 16px 16px;
        font-size: 14px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .details[hidden] {
        display: none;
      }
    `];let Ae=zs;d("ui-accordion",Ae);Ae.__docgenInfo={description:"MUI `Accordion`: a paper container with a clickable summary header that\ntoggles a details region. The header is wrapped in a heading element whose\nlevel is configurable via `headingLevel`.",methods:[],displayName:"UiAccordion"};const Ms=class Ms extends l{constructor(){super(...arguments),this.mouseEvent="click",this._onEvent=t=>{t.composedPath().includes(this)||this.dispatchEvent(new CustomEvent("click-away",{bubbles:!0,composed:!0}))}}_addListener(){document.addEventListener(this.mouseEvent,this._onEvent,!0)}_removeListener(){document.removeEventListener(this.mouseEvent,this._onEvent,!0)}connectedCallback(){super.connectedCallback(),this._addListener()}disconnectedCallback(){super.disconnectedCallback(),this._removeListener()}updated(t){t.has("mouseEvent")&&(this._removeListener(),this._addListener())}render(){return o`<slot></slot>`}};Ms.properties={mouseEvent:{type:String,attribute:"mouse-event",reflect:!0}},Ms.styles=[p,h`
      :host {
        display: contents;
      }
    `];let Be=Ms;d("ui-click-away-listener",Be);Be.__docgenInfo={description:"MUI `ClickAwayListener`: while connected, listens on `document` (capture\nphase) for the configured event and dispatches `click-away` when it happens\noutside the host's composed subtree.",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiClickAwayListener"};const go=class go extends l{render(){return o`<h2 part="title"><slot></slot></h2>`}};go.styles=[p,h`
      :host {
        display: block;
      }
      h2 {
        margin: 0;
        padding: 16px 24px 8px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
    `];let Ie=go;d("ui-dialog-title",Ie);Ie.__docgenInfo={description:"MUI `DialogTitle`: the heading of a dialog panel.",methods:[],displayName:"UiDialogTitle"};const Ns=class Ns extends l{constructor(){super(...arguments),this.dividers=!1}render(){return o`<div class="content" part="content"><slot></slot></div>`}};Ns.properties={dividers:{type:Boolean,reflect:!0}},Ns.styles=[p,h`
      :host {
        display: block;
      }
      .content {
        padding: 20px 24px;
        overflow-y: auto;
        font-size: 14px;
        line-height: 1.5;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([dividers]) .content {
        padding: 16px 24px;
        border-top: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        border-bottom: 1px solid
          var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
    `];let Te=Ns;d("ui-dialog-content",Te);Te.__docgenInfo={description:"MUI `DialogContent`: the scrollable body of a dialog.",methods:[],displayName:"UiDialogContent"};const As=class As extends l{constructor(){super(...arguments),this.disableSpacing=!1}render(){return o`<div class="actions" part="actions"><slot></slot></div>`}};As.properties={disableSpacing:{type:Boolean,attribute:"disable-spacing",reflect:!0}},As.styles=[p,h`
      :host {
        display: block;
      }
      .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        padding: 8px 16px;
      }
      :host([disable-spacing]) .actions {
        gap: 0;
      }
    `];let Pe=As;d("ui-dialog-actions",Pe);Pe.__docgenInfo={description:"MUI `DialogActions`: the right-aligned button row of a dialog.",methods:[],displayName:"UiDialogActions"};const Bs=class Bs extends l{constructor(){super(...arguments),this.position="right",this._onSlotChange=()=>{this._syncItems()}}updated(){this._syncItems()}_resolve(t){switch(this.position){case"left":return{position:"left",alternate:!1};case"alternate":return{position:t%2===0?"right":"left",alternate:!0};case"alternate-reverse":return{position:t%2===0?"left":"right",alternate:!0};default:return{position:"right",alternate:!1}}}_syncItems(){Array.from(this.children).filter(e=>e.tagName.toLowerCase()==="ui-timeline-item").forEach((e,i)=>{const s=this._resolve(i);e.position!==s.position&&(e.position=s.position),e.alternate!==s.alternate&&(e.alternate=s.alternate)})}render(){return o`<slot @slotchange=${this._onSlotChange}></slot>`}};Bs.properties={position:{type:String,reflect:!0}},Bs.styles=[p,h`
      :host {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
      }
    `];let Le=Bs;d("ui-timeline",Le);Le.__docgenInfo={description:"",methods:[{name:"updated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiTimeline"};const Is=class Is extends l{constructor(){super(...arguments),this.position="right",this.alternate=!1}render(){return o`
      <div class="opposite" part="opposite"><slot name="opposite"></slot></div>
      ${this.alternate?o`<div class="center" part="center"></div>`:n}
      <div class="content" part="content"><slot></slot></div>
    `}};Is.properties={position:{type:String,reflect:!0},alternate:{type:Boolean,reflect:!0}},Is.styles=[p,h`
      :host {
        display: flex;
        flex-direction: row;
        min-height: 48px;
      }
      /* position="left" mirrors the row so the content column sits left. */
      :host([position='left']) {
        flex-direction: row-reverse;
      }
      .opposite {
        /* Width and padding are addressable so a page can turn the symmetric
           halves into e.g. a fixed date gutter without reaching into parts. */
        flex: 0 0 var(--ui-timeline-opposite-width, 50%);
        padding: var(--ui-timeline-opposite-padding, 6px 16px);
        text-align: right;
      }
      :host([position='left']) .opposite {
        text-align: left;
      }
      /* Center column: only rendered with [alternate] so the two side
         columns stay symmetric (the empty side keeps its width). */
      .center {
        flex: none;
        width: 12px;
      }
      .content {
        flex: 1 1 auto;
        padding: var(--ui-timeline-content-padding, 6px 16px);
      }
    `];let Re=Is;d("ui-timeline-item",Re);Re.__docgenInfo={description:"",methods:[],displayName:"UiTimelineItem"};const Ts=class Ts extends l{constructor(){super(...arguments),this.color="grey",this.variant="filled"}render(){return o`<slot></slot>`}};Ts.properties={color:{type:String,reflect:!0},variant:{type:String,reflect:!0}},Ts.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 4px 0;
        /* Slotted icons are larger than the dot and are allowed to overflow. */
        overflow: visible;
      }
      /* --ui-timeline-dot-color is a private component variable (not a
         design token): it just maps the "color" prop onto --ui-* tokens. */
      :host([color='grey']) {
        --ui-timeline-dot-color: #bdbdbd;
      }
      :host([color='primary']) {
        --ui-timeline-dot-color: var(--ui-color-primary, #1976d2);
      }
      :host([color='secondary']) {
        --ui-timeline-dot-color: var(--ui-color-secondary, #9c27b0);
      }
      :host([color='error']) {
        --ui-timeline-dot-color: var(--ui-color-error, #d32f2f);
      }
      :host([color='info']) {
        --ui-timeline-dot-color: var(--ui-color-info, #0288d1);
      }
      :host([color='success']) {
        --ui-timeline-dot-color: var(--ui-color-success, #2e7d32);
      }
      :host([color='warning']) {
        --ui-timeline-dot-color: var(--ui-color-warning, #ed6c02);
      }
      :host([variant='filled']) {
        background: var(--ui-timeline-dot-color, #bdbdbd);
      }
      :host([variant='outlined']) {
        background: transparent;
        border: 2px solid var(--ui-timeline-dot-color, #bdbdbd);
      }
      ::slotted(*) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        overflow: visible;
      }
    `];let Oe=Ts;d("ui-timeline-dot",Oe);Oe.__docgenInfo={description:"",methods:[],displayName:"UiTimelineDot"};const Ps=class Ps extends l{constructor(){super(...arguments),this.show=!0,this.timeout=200,this.appear=!0,this.unmountOnExit=!1,this._visible=!0,this._entered=!1,this._synced=!1}connectedCallback(){super.connectedCallback(),this.show||(this._visible=!1,this._entered=!1)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimers()}updated(t){if(!this._synced){if(this._synced=!0,!this.show){this._visible=!1,this._entered=!1;return}if(!this.appear||this._reducedMotion()){this._entered=!0;return}this._scheduleEnter();return}t.has("show")&&(this.show?this._enter():this._leave())}_reducedMotion(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}_clearTimers(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0),this._frame!==void 0&&(cancelAnimationFrame(this._frame),this._frame=void 0)}_scheduleEnter(){this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(".root");t&&getComputedStyle(t).opacity,this._frame=requestAnimationFrame(()=>{this._frame=void 0,this._entered=!0})})}_enter(){if(this._clearTimers(),this._visible=!0,this._entered=!1,this._reducedMotion()){this._entered=!0;return}this._scheduleEnter()}_leave(){if(this._clearTimers(),this._entered=!1,this._reducedMotion()){this._visible=!1;return}this._timer=window.setTimeout(()=>{this._timer=void 0,this._visible=!1},Math.max(0,this.timeout))}_style(){const t=this._reducedMotion()?0:Math.max(0,this.timeout);return`opacity:${this._entered?1:0};transition:opacity ${t}ms ease-in-out;`}render(){if(!this._visible&&this.unmountOnExit)return n;const t=this._visible?"":"display:none;";return o`<div
      class="root"
      part="root"
      style="${t}${this._style()}"
    >
      <slot></slot>
    </div>`}};Ps.properties={show:{type:Boolean,reflect:!0},timeout:{type:Number,reflect:!0},appear:{type:Boolean,reflect:!0},unmountOnExit:{type:Boolean,attribute:"unmount-on-exit",reflect:!0},_visible:{state:!0},_entered:{state:!0}},Ps.styles=[p,h`
      :host {
        display: block;
      }
      .root {
        display: block;
      }
      @media (prefers-reduced-motion: reduce) {
        :host,
        .root {
          transition: none !important;
        }
      }
    `];let De=Ps;d("ui-fade",De);De.__docgenInfo={description:"MUI `Fade` transition.\n\nThe enter/exit state machine (`_visible` = mounted/displayed, `_entered` =\ntransitioned in) is deliberately re-implemented in each of ui-fade,\nui-grow, ui-slide and ui-zoom — there is no shared helper module.",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiFade"};const Ls=class Ls extends l{constructor(){super(...arguments),this.show=!0,this.timeout=200,this.appear=!0,this.unmountOnExit=!1,this._visible=!0,this._entered=!1,this._synced=!1}connectedCallback(){super.connectedCallback(),this.show||(this._visible=!1,this._entered=!1)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimers()}updated(t){if(!this._synced){if(this._synced=!0,!this.show){this._visible=!1,this._entered=!1;return}if(!this.appear||this._reducedMotion()){this._entered=!0;return}this._scheduleEnter();return}t.has("show")&&(this.show?this._enter():this._leave())}_reducedMotion(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}_clearTimers(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0),this._frame!==void 0&&(cancelAnimationFrame(this._frame),this._frame=void 0)}_scheduleEnter(){this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(".root");t&&getComputedStyle(t).opacity,this._frame=requestAnimationFrame(()=>{this._frame=void 0,this._entered=!0})})}_enter(){if(this._clearTimers(),this._visible=!0,this._entered=!1,this._reducedMotion()){this._entered=!0;return}this._scheduleEnter()}_leave(){if(this._clearTimers(),this._entered=!1,this._reducedMotion()){this._visible=!1;return}this._timer=window.setTimeout(()=>{this._timer=void 0,this._visible=!1},Math.max(0,this.timeout))}_style(){const t=this._reducedMotion()?0:Math.max(0,this.timeout),e=this._entered?1:.75;return`opacity:${this._entered?1:0};transform:scale(${e});transform-origin:center;transition:opacity ${t}ms ease-in-out,transform ${t}ms ease-in-out;`}render(){if(!this._visible&&this.unmountOnExit)return n;const t=this._visible?"":"display:none;";return o`<div
      class="root"
      part="root"
      style="${t}${this._style()}"
    >
      <slot></slot>
    </div>`}};Ls.properties={show:{type:Boolean,reflect:!0},timeout:{type:Number,reflect:!0},appear:{type:Boolean,reflect:!0},unmountOnExit:{type:Boolean,attribute:"unmount-on-exit",reflect:!0},_visible:{state:!0},_entered:{state:!0}},Ls.styles=[p,h`
      :host {
        display: block;
      }
      .root {
        display: block;
      }
      @media (prefers-reduced-motion: reduce) {
        :host,
        .root {
          transition: none !important;
        }
      }
    `];let je=Ls;d("ui-grow",je);je.__docgenInfo={description:"MUI `Grow` transition. Same small enter/exit state machine as ui-fade\n(re-implemented here on purpose — no shared helper module).",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiGrow"};const Rs=class Rs extends l{constructor(){super(...arguments),this.show=!0,this.timeout=200,this.appear=!0,this.unmountOnExit=!1,this.direction="down",this._visible=!0,this._entered=!1,this._synced=!1}connectedCallback(){super.connectedCallback(),this.show||(this._visible=!1,this._entered=!1)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimers()}updated(t){if(!this._synced){if(this._synced=!0,!this.show){this._visible=!1,this._entered=!1;return}if(!this.appear||this._reducedMotion()){this._entered=!0;return}this._scheduleEnter();return}t.has("show")&&(this.show?this._enter():this._leave())}_reducedMotion(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}_clearTimers(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0),this._frame!==void 0&&(cancelAnimationFrame(this._frame),this._frame=void 0)}_scheduleEnter(){this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(".root");t&&getComputedStyle(t).transform,this._frame=requestAnimationFrame(()=>{this._frame=void 0,this._entered=!0})})}_enter(){if(this._clearTimers(),this._visible=!0,this._entered=!1,this._reducedMotion()){this._entered=!0;return}this._scheduleEnter()}_leave(){if(this._clearTimers(),this._entered=!1,this._reducedMotion()){this._visible=!1;return}this._timer=window.setTimeout(()=>{this._timer=void 0,this._visible=!1},Math.max(0,this.timeout))}_offset(){switch(this.direction){case"up":return"translateY(-100%)";case"left":return"translateX(100%)";case"right":return"translateX(-100%)";default:return"translateY(100%)"}}_style(){const t=this._reducedMotion()?0:Math.max(0,this.timeout);return`transform:${this._entered?"none":this._offset()};transition:transform ${t}ms ease-in-out;`}render(){if(!this._visible&&this.unmountOnExit)return n;const t=this._visible?"":"display:none;";return o`<div
      class="root"
      part="root"
      style="${t}${this._style()}"
    >
      <slot></slot>
    </div>`}};Rs.properties={show:{type:Boolean,reflect:!0},timeout:{type:Number,reflect:!0},appear:{type:Boolean,reflect:!0},unmountOnExit:{type:Boolean,attribute:"unmount-on-exit",reflect:!0},direction:{type:String,reflect:!0},_visible:{state:!0},_entered:{state:!0}},Rs.styles=[p,h`
      :host {
        display: block;
        overflow: hidden;
      }
      .root {
        display: block;
      }
      @media (prefers-reduced-motion: reduce) {
        :host,
        .root {
          transition: none !important;
        }
      }
    `];let qe=Rs;d("ui-slide",qe);qe.__docgenInfo={description:"MUI `Slide` transition. Same small enter/exit state machine as ui-fade\n(re-implemented here on purpose — no shared helper module).",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiSlide"};const Os=class Os extends l{constructor(){super(...arguments),this.show=!0,this.timeout=200,this.appear=!0,this.unmountOnExit=!1,this._visible=!0,this._entered=!1,this._synced=!1}connectedCallback(){super.connectedCallback(),this.show||(this._visible=!1,this._entered=!1)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimers()}updated(t){if(!this._synced){if(this._synced=!0,!this.show){this._visible=!1,this._entered=!1;return}if(!this.appear||this._reducedMotion()){this._entered=!0;return}this._scheduleEnter();return}t.has("show")&&(this.show?this._enter():this._leave())}_reducedMotion(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}_clearTimers(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0),this._frame!==void 0&&(cancelAnimationFrame(this._frame),this._frame=void 0)}_scheduleEnter(){this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(".root");t&&getComputedStyle(t).opacity,this._frame=requestAnimationFrame(()=>{this._frame=void 0,this._entered=!0})})}_enter(){if(this._clearTimers(),this._visible=!0,this._entered=!1,this._reducedMotion()){this._entered=!0;return}this._scheduleEnter()}_leave(){if(this._clearTimers(),this._entered=!1,this._reducedMotion()){this._visible=!1;return}this._timer=window.setTimeout(()=>{this._timer=void 0,this._visible=!1},Math.max(0,this.timeout))}_style(){const t=this._reducedMotion()?0:Math.max(0,this.timeout),e=this._entered?1:0;return`opacity:${this._entered?1:0};transform:scale(${e});transform-origin:center;transition:opacity ${t}ms ease-in-out,transform ${t}ms ease-in-out;`}render(){if(!this._visible&&this.unmountOnExit)return n;const t=this._visible?"":"display:none;";return o`<div
      class="root"
      part="root"
      style="${t}${this._style()}"
    >
      <slot></slot>
    </div>`}};Os.properties={show:{type:Boolean,reflect:!0},timeout:{type:Number,reflect:!0},appear:{type:Boolean,reflect:!0},unmountOnExit:{type:Boolean,attribute:"unmount-on-exit",reflect:!0},_visible:{state:!0},_entered:{state:!0}},Os.styles=[p,h`
      :host {
        display: block;
      }
      .root {
        display: block;
      }
      @media (prefers-reduced-motion: reduce) {
        :host,
        .root {
          transition: none !important;
        }
      }
    `];let He=Os;d("ui-zoom",He);He.__docgenInfo={description:"MUI `Zoom` transition. Same small enter/exit state machine as ui-fade\n(re-implemented here on purpose — no shared helper module).",methods:[{name:"connectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"updated",docblock:null,modifiers:[],params:[{name:"changed",optional:!1,type:{name:"Map",elements:[{name:"string"},{name:"unknown"}],raw:"Map<string, unknown>",alias:"Map"}}],returns:{type:{name:"void"}}}],displayName:"UiZoom"};const Ds=class Ds extends l{constructor(){super(...arguments),this.container="",this.disablePortal=!1}firstUpdated(){if(this.disablePortal)return;const t=this._resolveContainer(),e=document.createElement("div");for(e.setAttribute("data-ui-portal",""),t.appendChild(e);this.firstChild;)e.appendChild(this.firstChild);this._portal=e}disconnectedCallback(){super.disconnectedCallback(),this._portal&&(this._portal.remove(),this._portal=void 0)}_resolveContainer(){if(this.container){const t=document.querySelector(this.container);if(t instanceof HTMLElement)return t}return document.body}render(){return o`<slot></slot>`}};Ds.properties={container:{type:String},disablePortal:{type:Boolean,attribute:"disable-portal",reflect:!0}},Ds.styles=[p,h`
      :host {
        display: contents;
      }
    `];let Ve=Ds;d("ui-portal",Ve);Ve.__docgenInfo={description:"",methods:[{name:"firstUpdated",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}},{name:"disconnectedCallback",docblock:null,modifiers:[],params:[],returns:{type:{name:"void"}}}],displayName:"UiPortal"};const js=class js extends l{constructor(){super(...arguments),this.spacing=2,this.align="center",this.justify="",this.wrap=!0,this.grow=!1}_styles(){const t=[`gap:calc(${this.spacing} * var(--ui-spacing, 8px))`];return this.align&&t.push(`align-items:${this.align}`),this.justify&&t.push(`justify-content:${this.justify}`),t.join(";")}render(){return o`<div class="group" part="root" style=${this._styles()}>
      <slot></slot>
    </div>`}};js.properties={spacing:{type:Number,reflect:!0},align:{type:String,attribute:"align"},justify:{type:String,attribute:"justify"},wrap:{type:Boolean,reflect:!0},grow:{type:Boolean,reflect:!0}},js.styles=[p,h`
      :host {
        display: block;
      }
      .group {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
      }
      :host([wrap]) .group {
        flex-wrap: wrap;
      }
      :host([grow]) .group ::slotted(*) {
        flex: 1 1 0;
        min-width: 0;
      }
    `];let Fe=js;d("ui-group",Fe);Fe.__docgenInfo={description:"A row of things (Mantine's Group). Stack is the column, Group is the row, and\nboth take `spacing` in units of `--ui-spacing` (1 = 8px), like MUI.",methods:[],displayName:"UiGroup"};const qs=class qs extends l{constructor(){super(...arguments),this.inline=!1,this.height=""}render(){return o`<div
      class="center"
      part="root"
      style=${this.height?`--ui-center-height:${this.height}`:""}
    >
      <slot></slot>
    </div>`}};qs.properties={inline:{type:Boolean,reflect:!0},height:{type:String}},qs.styles=[p,h`
      :host {
        display: flex;
      }
      :host([inline]) {
        display: inline-flex;
      }
      .center {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: var(--ui-center-height, 0);
      }
    `];let We=qs;d("ui-center",We);We.__docgenInfo={description:"Centres whatever is inside it (Mantine's Center). `inline` keeps the element in\nthe text flow, and `height` sets a fixed box to centre within.",methods:[],displayName:"UiCenter"};const Hs=class Hs extends l{constructor(){super(...arguments),this.size=0,this.w="",this.h="",this.inline=!1}_style(){const t=this.size?`calc(${this.size} * var(--ui-spacing, 8px))`:"";return`width:${this.w||t||"0"};height:${this.h||t||"0"}`}render(){return o`<div part="root" style=${this._style()}></div>`}};Hs.properties={size:{type:Number,reflect:!0},w:{type:String},h:{type:String},inline:{type:Boolean,reflect:!0}},Hs.styles=[p,h`
      :host {
        display: block;
        flex: 0 0 auto;
      }
      :host([inline]) {
        display: inline-block;
      }
    `];let Ke=Hs;d("ui-space",Ke);Ke.__docgenInfo={description:"A gap (Mantine's Space). `size` is in units of `--ui-spacing` and fills both\naxes; `w` and `h` take any CSS length when one axis is all you need.",methods:[],displayName:"UiSpace"};const Vs=class Vs extends l{constructor(){super(...arguments),this.cols=0,this.minColWidth="220px",this.spacing=2}_templateColumns(){return this.cols>0?`repeat(${this.cols}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(100%, ${this.minColWidth}), 1fr))`}render(){return o`<div
      class="grid"
      part="root"
      style=${`grid-template-columns:${this._templateColumns()};gap:calc(${this.spacing} * var(--ui-spacing, 8px))`}
    >
      <slot></slot>
    </div>`}};Vs.properties={cols:{type:Number,reflect:!0},minColWidth:{type:String,attribute:"min-col-width"},spacing:{type:Number,reflect:!0}},Vs.styles=[p,h`
      :host {
        display: block;
      }
      .grid {
        display: grid;
      }
    `];let Xe=Vs;d("ui-simple-grid",Xe);Xe.__docgenInfo={description:`An even grid with no column maths (Mantine's SimpleGrid). Either say how many
columns you want, or give it the narrowest a column may be and let it fit as
many as the width allows.`,methods:[],displayName:"UiSimpleGrid"};const Fs=class Fs extends l{constructor(){super(...arguments),this.size="md"}render(){return o`<slot></slot>`}};Fs.properties={size:{type:String,reflect:!0}},Fs.styles=[p,h`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: inherit;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.4;
        min-width: 22px;
        padding: 1px 6px;
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        border-bottom-width: 2px;
        border-radius: 4px;
        background: var(--ui-color-surface, #fff);
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([size='sm']) {
        font-size: 11px;
        min-width: 18px;
        padding: 0 4px;
      }
      :host([size='lg']) {
        font-size: 14px;
        min-width: 26px;
        padding: 3px 8px;
      }
    `];let Ye=Fs;d("ui-kbd",Ye);Ye.__docgenInfo={description:`A key cap (Mantine's Kbd). The face is the theme's own font, not a monospace
one, so it sits with the rest of the copy.`,methods:[],displayName:"UiKbd"};const Ws=class Ws extends l{constructor(){super(...arguments),this.cite="",this.color="primary",this.icon=""}render(){return o`<figure class="root" part="root">
      ${this.icon?o`<span class="icon" part="icon">${this.icon}</span>`:n}
      <div>
        <slot></slot>
        ${this.cite?o`<cite class="cite" part="cite">${this.cite}</cite>`:n}
      </div>
    </figure>`}};Ws.properties={cite:{type:String},color:{type:String,reflect:!0},icon:{type:String}},Ws.styles=[p,Qs("--ui-blockquote-rail"),h`
      :host {
        display: block;
        --ui-blockquote-rail: var(--ui-color-primary, #1976d2);
      }
      .root {
        display: flex;
        gap: 12px;
        padding-inline-start: 16px;
        border-inline-start: 3px solid var(--ui-blockquote-rail);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .icon {
        flex: 0 0 auto;
        color: var(--ui-blockquote-rail);
      }
      .cite {
        display: block;
        margin-top: 8px;
        font-size: 13px;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      .cite::before {
        content: '— ';
      }
    `];let Ge=Ws;d("ui-blockquote",Ge);Ge.__docgenInfo={description:`A quotation with a coloured rail (Mantine's Blockquote). The rail colour is a
palette key, resolved in the shadow so page CSS can still win on the host.`,methods:[],displayName:"UiBlockquote"};const Ks=class Ks extends l{constructor(){super(...arguments),this.value=0,this.size=120,this.thickness=8,this.color="primary",this.label="",this.roundCaps=!0}render(){const t=Math.max(16,Number(this.size)||120),e=Math.min(Math.max(1,Number(this.thickness)||8),t/2),i=(t-e)/2,s=2*Math.PI*i,r=Math.min(Math.max(Number(this.value)||0,0),100),c=s*(1-r/100),u=t/2;return o`<div
      class="root"
      part="root"
      style=${`--ui-ring-thickness:${e}px`}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round(r)}
    >
      <svg width=${t} height=${t} viewBox=${`0 0 ${t} ${t}`} aria-hidden="true">
        <circle
          class="track"
          cx=${u}
          cy=${u}
          r=${i}
          fill="none"
          stroke-width=${e}
        ></circle>
        <circle
          class="value"
          cx=${u}
          cy=${u}
          r=${i}
          fill="none"
          stroke-width=${e}
          stroke-linecap=${this.roundCaps?"round":"butt"}
          stroke-dasharray=${s}
          stroke-dashoffset=${c}
          transform=${`rotate(-90 ${u} ${u})`}
        ></circle>
      </svg>
      <div class="label" part="label">
        <slot>${this.label}</slot>
      </div>
    </div>`}};Ks.properties={value:{type:Number,reflect:!0},size:{type:Number,reflect:!0},thickness:{type:Number,reflect:!0},color:{type:String,reflect:!0},label:{type:String},roundCaps:{type:Boolean,attribute:"round-caps",reflect:!0}},Ks.styles=[p,Qs("--ui-ring-color"),h`
      :host {
        display: inline-flex;
        --ui-ring-color: var(--ui-color-primary, #1976d2);
      }
      .root {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      svg {
        display: block;
      }
      .track {
        stroke: var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      .value {
        stroke: var(--ui-ring-color);
        transition: stroke-dashoffset 300ms ease;
      }
      .label {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        padding: calc(var(--ui-ring-thickness, 8px) + 6px);
      }
    `];let Ze=Ks;d("ui-ring-progress",Ze);Ze.__docgenInfo={description:`A ring with a value in it (Mantine's RingProgress). The stroke colour is a
palette key and the middle takes a slot, so a number, a label or an icon all
work without another prop.`,methods:[],displayName:"UiRingProgress"};const Xs=class Xs extends l{constructor(){super(...arguments),this.maxHeight=120,this.expanded=!1,this.showLabel="Show more",this.hideLabel="Show less",this.hideToggle=!1}_toggle(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}render(){return o`
      <div
        class="body ${this.expanded?"is-expanded":""}"
        part="body"
        style=${`--ui-spoiler-max:${Number(this.maxHeight)||120}px`}
      >
        <slot></slot>
        ${this.expanded?n:o`<div class="fade" part="fade"></div>`}
      </div>
      ${this.hideToggle?n:o`<button
            class="toggle"
            part="toggle"
            type="button"
            aria-expanded=${this.expanded?"true":"false"}
            @click=${this._toggle}
          >
            ${this.expanded?this.hideLabel:this.showLabel}
          </button>`}
    `}};Xs.properties={maxHeight:{type:Number,attribute:"max-height",reflect:!0},expanded:{type:Boolean,reflect:!0},showLabel:{type:String,attribute:"show-label"},hideLabel:{type:String,attribute:"hide-label"},hideToggle:{type:Boolean,attribute:"hide-toggle",reflect:!0}},Xs.styles=[p,h`
      :host {
        display: block;
      }
      .body {
        position: relative;
        overflow: hidden;
        max-height: var(--ui-spoiler-max, 120px);
      }
      .body.is-expanded {
        max-height: none;
      }
      .fade {
        position: absolute;
        inset-inline: 0;
        bottom: 0;
        height: 56px;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--ui-color-bg, #ffffff)
        );
        pointer-events: none;
      }
      .toggle {
        margin-top: 8px;
        padding: 4px 0;
        border: 0;
        background: none;
        font: inherit;
        font-weight: 600;
        color: var(--ui-color-primary, #1976d2);
        cursor: pointer;
      }
      .toggle:hover {
        text-decoration: underline;
      }
      .toggle:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      .toggle::after {
        content: '';
        display: inline-block;
        width: 7px;
        height: 7px;
        margin-inline-start: 8px;
        border-inline-end: 2px solid currentColor;
        border-block-end: 2px solid currentColor;
        transform: rotate(45deg) translateY(-2px);
      }
      :host([expanded]) .toggle::after {
        transform: rotate(-135deg) translateY(-2px);
      }
    `];let Je=Xs;d("ui-spoiler",Je);Je.__docgenInfo={description:'Long content behind a "show more" (Mantine\'s Spoiler). Collapsed it clips to\n`maxHeight` behind a fade; expanded it hands the height back to the content.\nThe toggle dispatches a `change` event with `detail.expanded`.',methods:[],displayName:"UiSpoiler"};const Nr=["primary","secondary","error","warning","info","success"],Ar=Nr.map(a=>`:host([color='${a}']) { --ui-indicator-color: var(--ui-color-${a}, currentColor); --ui-indicator-contrast: var(--ui-color-${a}-contrast, #ffffff); }`).join(`
`),Ys=class Ys extends l{constructor(){super(...arguments),this.color="error",this.position="top-end",this.size=10,this.label="",this.disabled=!1,this.offset=0}render(){const t=Math.max(6,Number(this.size)||10),e=Number(this.offset)||0;return o`
      <slot></slot>
      ${this.disabled?n:o`<span
            class="dot"
            part="dot"
            data-position=${this.position}
            style=${`--ui-indicator-size:${t}px;--ui-indicator-offset:${e}px`}
            >${this.label}</span
          >`}
    `}};Ys.properties={color:{type:String,reflect:!0},position:{type:String,reflect:!0},size:{type:Number,reflect:!0},label:{type:String},disabled:{type:Boolean,reflect:!0},offset:{type:Number,reflect:!0}},Ys.styles=[p,ti(Ar),h`
      :host {
        display: inline-block;
        position: relative;
        --ui-indicator-color: var(--ui-color-error, #d32f2f);
      }
      .dot {
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: var(--ui-indicator-size, 10px);
        min-height: var(--ui-indicator-size, 10px);
        padding: 0 4px;
        border: 2px solid var(--ui-color-bg, #ffffff);
        border-radius: 999px;
        background: var(--ui-indicator-color);
        color: var(--ui-indicator-contrast, #ffffff);
        font-size: 10px;
        font-weight: 700;
        line-height: 1;
      }
      :host(:not([label])) .dot {
        padding: 0;
      }
      :host(:not([disabled])) .dot[data-position='top-end'] {
        top: 0;
        inset-inline-end: 0;
      }
      :host(:not([disabled])) .dot[data-position='top-start'] {
        top: 0;
        inset-inline-start: 0;
      }
      :host(:not([disabled])) .dot[data-position='bottom-end'] {
        bottom: 0;
        inset-inline-end: 0;
      }
      :host(:not([disabled])) .dot[data-position='bottom-start'] {
        bottom: 0;
        inset-inline-start: 0;
      }
      :host([offset]) .dot {
        margin: calc(var(--ui-indicator-offset, 0px) * -1);
      }
    `];let Qe=Ys;d("ui-indicator",Qe);Qe.__docgenInfo={description:"A dot on the corner of whatever is inside it (Mantine's Indicator). Set\n`label` and the dot becomes a small counter instead.",methods:[],displayName:"UiIndicator"};const Br=["primary","secondary","error","warning","info","success"],Ir=Br.flatMap(a=>{const t=`var(--ui-color-${a}, currentColor)`;return[`:host([color='${a}'][variant='filled']) .icon { --ui-theme-icon-bg: ${t}; --ui-theme-icon-fg: var(--ui-color-${a}-contrast, #ffffff); }`,`:host([color='${a}'][variant='light']) .icon { --ui-theme-icon-bg: color-mix(in srgb, ${t} 14%, transparent); --ui-theme-icon-fg: ${t}; }`,`:host([color='${a}'][variant='outline']) .icon { background: transparent; border-color: color-mix(in srgb, ${t} 45%, transparent); --ui-theme-icon-fg: ${t}; }`,`:host([color='${a}']) { --ui-theme-icon-fallback: ${t}; }`]}).join(`
`),Gs=class Gs extends l{constructor(){super(...arguments),this.variant="filled",this.color="primary",this.size=40,this.radius="md"}render(){return o`<span
      class="icon"
      part="root"
      style=${`--ui-theme-icon-size:${Math.max(16,Number(this.size)||40)}px`}
    >
      <slot></slot>
    </span>`}};Gs.properties={variant:{type:String,reflect:!0},color:{type:String,reflect:!0},size:{type:Number,reflect:!0},radius:{type:String,reflect:!0}},Gs.styles=[p,ti(Ir),h`
      :host {
        display: inline-flex;
        font-size: inherit;
      }
      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--ui-theme-icon-size, 40px);
        height: var(--ui-theme-icon-size, 40px);
        border: 1px solid transparent;
        border-radius: var(--ui-radius, 4px);
        background: var(--ui-theme-icon-bg, var(--ui-theme-icon-fallback, var(--ui-color-primary, #1976d2)));
        color: var(--ui-theme-icon-fg, #ffffff);
      }
      :host([radius='sm']) .icon {
        border-radius: 2px;
      }
      :host([radius='lg']) .icon {
        border-radius: 12px;
      }
      :host([radius='pill']) .icon {
        border-radius: 999px;
      }
    `];let Ue=Gs;d("ui-theme-icon",Ue);Ue.__docgenInfo={description:"A coloured box for an icon (Mantine's ThemeIcon).",methods:[],displayName:"UiThemeIcon"};const qo=[["ui-button",X],["ui-input",Y],["ui-card",G],["ui-badge",Z],["ui-checkbox",J],["ui-radio",I],["ui-radio-group",Q],["ui-switch",U],["ui-select",tt],["ui-textarea",et],["ui-avatar",it],["ui-chip",st],["ui-divider",ot],["ui-tooltip",rt],["ui-progress",at],["ui-dialog",nt],["ui-alert",lt],["ui-paper",ct],["ui-box",dt],["ui-container",ht],["ui-stack",pt],["ui-grid",ut],["ui-image-list",ft],["ui-image-list-item",mt],["ui-masonry",bt],["ui-card-header",gt],["ui-card-content",vt],["ui-card-actions",yt],["ui-card-media",xt],["ui-card-action-area",wt],["ui-typography",kt],["ui-link",_t],["ui-icon",$t],["ui-svg-icon",St],["ui-list",Ct],["ui-list-item",Et],["ui-list-item-button",zt],["ui-list-item-text",Mt],["ui-list-item-icon",Nt],["ui-list-subheader",At],["ui-table",Bt],["ui-table-container",It],["ui-table-head",Tt],["ui-table-body",Pt],["ui-table-footer",Lt],["ui-table-row",Rt],["ui-table-cell",Ot],["ui-table-sort-label",Dt],["ui-table-pagination",jt],["ui-app-bar",qt],["ui-toolbar",Ht],["ui-drawer",Vt],["ui-menu",Ft],["ui-menu-item",Wt],["ui-tabs",Kt],["ui-tab",Xt],["ui-pagination",Yt],["ui-breadcrumbs",Gt],["ui-bottom-navigation",Zt],["ui-bottom-navigation-action",Jt],["ui-stepper",Qt],["ui-step",Ut],["ui-step-label",te],["ui-step-content",ee],["ui-step-button",ie],["ui-step-connector",se],["ui-speed-dial",oe],["ui-speed-dial-action",re],["ui-icon-button",ae],["ui-button-group",ne],["ui-fab",le],["ui-toggle-button",ce],["ui-toggle-button-group",de],["ui-autocomplete",he],["ui-rating",pe],["ui-slider",ue],["ui-transfer-list",fe],["ui-textarea-autosize",me],["ui-form-control",be],["ui-form-label",ge],["ui-form-helper-text",ve],["ui-form-group",ye],["ui-form-control-label",xe],["ui-input-label",we],["ui-input-adornment",ke],["ui-backdrop",_e],["ui-modal",$e],["ui-popover",Se],["ui-popper",Ce],["ui-skeleton",Ee],["ui-snackbar",ze],["ui-circular-progress",Me],["ui-linear-progress",Ne],["ui-accordion",Ae],["ui-click-away-listener",Be],["ui-dialog-title",Ie],["ui-dialog-content",Te],["ui-dialog-actions",Pe],["ui-timeline",Le],["ui-timeline-item",Re],["ui-timeline-dot",Oe],["ui-fade",De],["ui-grow",je],["ui-slide",qe],["ui-zoom",He],["ui-portal",Ve],["ui-group",Fe],["ui-center",We],["ui-space",Ke],["ui-simple-grid",Xe],["ui-kbd",Ye],["ui-blockquote",Ge],["ui-ring-progress",Ze],["ui-spoiler",Je],["ui-indicator",Qe],["ui-theme-icon",Ue]];function Ho(){for(const[a,t]of qo)d(a,t)}qo.map(([a])=>a);Ho();const Tr=new Set(["children","localName","ref","style","className"]),Ao=new WeakMap,Bo=(a,t,e,i,s)=>{const r=s?.[t];r===void 0?(a[t]=e,e==null&&t in HTMLElement.prototype&&a.removeAttribute(t)):e!==i&&((c,u,f)=>{let m=Ao.get(c);m===void 0&&Ao.set(c,m=new Map);let b=m.get(u);f!==void 0?b===void 0?(m.set(u,b={handleEvent:f}),c.addEventListener(u,b)):b.handleEvent=f:b!==void 0&&(m.delete(u),c.removeEventListener(u,b))})(a,r,e)},Or=({react:a,tagName:t,elementClass:e,events:i,displayName:s})=>{const r=new Set(Object.keys(i??{})),c=a.forwardRef(((u,f)=>{const m=a.useRef(new Map),b=a.useRef(null),g={},k={};for(const[v,y]of Object.entries(u))Tr.has(v)?g[v==="className"?"class":v]=y:r.has(v)||v in e.prototype?k[v]=y:g[v]=y;return a.useLayoutEffect((()=>{if(b.current===null)return;const v=new Map;for(const y in k)Bo(b.current,y,u[y],m.current.get(y),i),m.current.delete(y),v.set(y,u[y]);for(const[y,Vo]of m.current)Bo(b.current,y,void 0,Vo,i);m.current=v})),a.useLayoutEffect((()=>{b.current?.removeAttribute("defer-hydration")}),[]),g.suppressHydrationWarning=!0,a.createElement(t,{...g,ref:a.useCallback((v=>{b.current=v,typeof f=="function"?f(v):f!==null&&(f.current=v)}),[f])})}));return c.displayName=s??e.name,c};Ho();export{Q as $,Et as A,Nt as B,At as C,Lt as D,Dt as E,nt as F,Te as G,Vt as H,_t as I,te as J,ee as K,yt as L,he as M,ne as N,le as O,be as P,ye as Q,ge as R,ke as S,pe as T,ve as U,me as V,ce as W,de as X,fe as Y,Ge as Z,I as _,we as a,$t as a0,ft as a1,mt as a2,Qe as a3,Ye as a4,Ct as a5,Mt as a6,jt as a7,Ue as a8,rt as a9,We as aA,ht as aB,ut as aC,bt as aD,ct as aE,Ke as aF,wt as aG,xt as aH,Ae as aI,Je as aJ,Be as aK,De as aL,je as aM,Se as aN,Ce as aO,Ve as aP,qe as aQ,He as aR,Le as aS,Re as aT,Oe as aU,Bt as aV,It as aW,Tt as aX,Pt as aY,Rt as aZ,Ot as a_,_e as aa,Me as ab,Pe as ac,Ie as ad,Ne as ae,$e as af,at as ag,Ze as ah,Ee as ai,ze as aj,qt as ak,Ht as al,Zt as am,Jt as an,Gt as ao,Ft as ap,Wt as aq,Yt as ar,oe as as,re as at,Qt as au,Ut as av,ie as aw,se as ax,Kt as ay,Xt as az,G as b,vt as c,pt as d,kt as e,Xe as f,dt as g,X as h,st as i,Y as j,tt as k,xe as l,U as m,lt as n,Or as o,gt as p,ot as q,J as r,ae as s,ue as t,et as u,it as v,Z as w,Fe as x,St as y,zt as z};
