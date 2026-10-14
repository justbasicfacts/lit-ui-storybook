import{t as R,j as e,T as v,a as k,b as F,d as M,f as P}from"./iframe-BGBv2Rkz.js";import"./index-Ds1DpZoa.js";import{C as c}from"./card-Bso1jyN7.js";import{C as m}from"./card-content-fPXuiB19.js";import{C as j}from"./card-header-DULaIHSg.js";import{S as l}from"./stack-CMVsJ6e_.js";import{T as s}from"./typography-Bk9oATh-.js";import{D as B}from"./divider-BwawZkRe.js";import{B as S}from"./box-HclkYR2K.js";import{B as h}from"./button-umO8R3TU.js";import{I as U}from"./input-BMmwR3ji.js";import{S as D}from"./select-7JgTCnEp.js";import{F as w}from"./form-control-label-BSa8HeP2.js";import{S as E}from"./switch-B5dfOSuU.js";import{C as z}from"./checkbox-DxUYYrDB.js";import{C as y}from"./chip-DzT6U0YL.js";import{A}from"./alert-D5WYbRzG.js";import"./preload-helper-Bs85Y4nq.js";const b="'Roboto Condensed', system-ui, sans-serif",se={title:"Theming/Live theming",parameters:{layout:"fullscreen"}};function N(n){const t=n.trim();let r=255,a=255,o=255;if(t.startsWith("#")){const i=t.slice(1),d=i.length===3?i.split("").map(p=>p+p).join(""):i;r=Number.parseInt(d.slice(0,2),16),a=Number.parseInt(d.slice(2,4),16),o=Number.parseInt(d.slice(4,6),16)}else t.startsWith("rgb")&&([r,a,o]=t.replace(/^rgba?\(/,"").replace(/\).*$/,"").split(",").map(i=>Number.parseFloat(i)));return(.2126*r+.7152*a+.0722*o)/255}const x=n=>N(n)>.6?"rgba(0, 0, 0, 0.87)":"#ffffff";function T({compact:n=!1}={}){return e.jsxs(l,{spacing:2,children:[e.jsxs(l,{spacing:1,children:[e.jsx(s,{variant:"overline",color:"text.secondary",component:"p",children:"Buttons"}),e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(h,{size:"sm",children:"Primary"}),e.jsx(h,{size:"sm",variant:"secondary",children:"Secondary"}),e.jsx(h,{size:"sm",variant:"outline",children:"Outline"}),e.jsx(h,{size:"sm",variant:"error",children:"Delete"})]})]}),e.jsxs(l,{spacing:1,children:[e.jsx(s,{variant:"overline",color:"text.secondary",component:"p",children:"Fields"}),e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:n?"1fr":"1fr 1fr"},children:[e.jsx(U,{label:"Project",value:"Design system"}),e.jsx(D,{label:"Environment",options:["Preview","Staging","Production"],value:"Preview"})]}),e.jsxs(l,{spacing:.5,children:[e.jsx(w,{label:"Email me on release",children:e.jsx(E,{checked:!0})}),e.jsx(w,{label:"Require review",children:e.jsx(z,{checked:!0})})]})]}),e.jsxs(l,{spacing:1,children:[e.jsx(s,{variant:"overline",color:"text.secondary",component:"p",children:"Status"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(y,{label:"v0.5.5",variant:"filled"}),e.jsx(y,{label:"Lit",variant:"outlined"}),e.jsx(y,{label:"React",variant:"outlined"})]}),e.jsx(A,{severity:"success",title:"Theme applied",children:"Every component here reads the same variables, so they all moved together."})]})]})}function C({title:n,lead:t,children:r}){return e.jsx(S,{padding:"32px 32px 64px",children:e.jsx(S,{style:{maxWidth:1120,margin:"0 auto"},children:e.jsxs(l,{spacing:3,children:[e.jsxs(l,{spacing:1,children:[e.jsx(s,{variant:"h4",component:"h1",children:n}),e.jsx(s,{variant:"body1",color:"text.secondary",component:"p",children:t})]}),r]})})})}const f={render:()=>e.jsxs(C,{title:"Several themes on one page",lead:"setTheme takes a target element, so a theme can be scoped to a container instead of the document. These three panels are the same components under three presets, with nothing duplicated and no page CSS.",children:[e.jsx("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",alignItems:"stretch"},children:["light","dark","brand"].map(n=>e.jsxs(c,{elevated:!0,children:[e.jsx(j,{title:n,subheader:k[n].label}),e.jsx(m,{children:e.jsx(v,{theme:k[n].theme,padding:20,style:{height:"100%"},children:e.jsx(T,{compact:!0})})})]},n))}),e.jsx(c,{children:e.jsx(m,{children:e.jsx(s,{variant:"body2",color:"text.secondary",component:"p",children:"The dark preset is MUI's dark palette. The brand preset names a primary, a secondary and a radius, and everything else keeps the default, which is why a theme can be a dozen lines."})})})]})},W=n=>{const t=n.mode==="light",r=t?{}:P,a=r.palette??{},o=(I,O)=>I||O,i=o(n.primary,"#0f766e"),d=o(n.secondary,"#f59e0b"),p=o(n.error,"#dc2626");return{...r,palette:{...a,primary:{...a.primary,main:i,contrastText:x(i)},secondary:{...a.secondary,main:d,contrastText:x(d)},error:{...a.error,main:p,contrastText:x(p)},text:{...a.text,primary:t?"#0f172a":"#ffffff",secondary:t?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.7)",muted:t?"rgba(0, 0, 0, 0.75)":"rgba(255, 255, 255, 0.82)"},background:{...a.background,paper:t?"#ffffff":"#1e1e1e",default:t?"#ffffff":"#121212",surface:t?"#ffffff":"#1e1e1e",muted:t?"#fafafa":"#1a1a1a"},divider:t?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"},shape:{borderRadius:n.radius},spacing:n.spacing,typography:{fontFamily:n.fontFamily}}},g={args:{mode:"light",primary:"#0f766e",secondary:"#f59e0b",error:"#dc2626",radius:12,spacing:8,fontFamily:b},argTypes:{mode:{control:"inline-radio",options:["light","dark"],description:"Light or dark surfaces. The colour controls change the accents on top."},primary:{control:"color"},secondary:{control:"color"},error:{control:"color"},radius:{control:{type:"range",min:0,max:24,step:1}},spacing:{control:{type:"range",min:4,max:16,step:1}},fontFamily:{control:"select",options:[b,"system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif","Georgia, 'Times New Roman', serif","'Trebuchet MS', Verdana, sans-serif"]}},render:n=>{const t=W(n),r=F(M(t));return e.jsx(v,{theme:t,fill:!0,children:e.jsx(C,{title:"Build a theme in the panel",lead:"Change any control and the components re-theme immediately. The values are the theme object; the list on the right is what it resolves to, which is exactly what setTheme writes onto the element.",children:e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"minmax(340px, 1fr) minmax(280px, 360px)",alignItems:"start"},children:[e.jsx(c,{children:e.jsx(m,{children:e.jsx(T,{})})}),e.jsxs(c,{children:[e.jsx(j,{title:"Resolved colours",subheader:`${Object.keys(r).length} variables in total`}),e.jsx(m,{children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,maxHeight:420,overflowY:"auto"},children:Object.entries(r).filter(([a])=>a.startsWith("--ui-color-")).map(([a,o])=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"space-between"},children:[e.jsx(s,{variant:"caption",component:"p",children:a.replace("--ui-color-","")}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(s,{variant:"caption",color:"text.secondary",component:"p",children:o}),e.jsx("div",{style:{width:18,height:18,background:o,border:"1px solid var(--ui-color-divider)",borderRadius:4}})]})]},a))})})]})]})})})}},u={render:()=>{const n={palette:{mode:"light",primary:{main:"#7c3aed",dark:"#5b21b6",light:"#c4b5fd",contrastText:"#ffffff"},secondary:{main:"#0ea5e9",dark:"#0369a1",contrastText:"#ffffff"},success:{main:"#15803d"},background:{paper:"#ffffff",default:"#faf5ff"},divider:"rgba(124, 58, 237, 0.18)"},shape:{borderRadius:16},spacing:8,typography:{fontFamily:b,fontSize:14},breakpoints:{values:{xs:0,sm:600,md:900,lg:1200,xl:1536}},transitions:{duration:{shortest:150}},components:{MuiButton:{defaultProps:{disableElevation:!0}}}},t=R(n);return e.jsx(C,{title:"An MUI theme, unchanged",lead:"The token names mirror MUI's palette, so a theme object from a React app can be passed straight in. Keys this library has no equivalent for are ignored rather than rejected.",children:e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"minmax(340px, 1fr) minmax(280px, 360px)"},children:[e.jsx(c,{children:e.jsx(m,{children:e.jsx(v,{theme:n,children:e.jsx(T,{})})})}),e.jsxs(c,{children:[e.jsx(j,{title:"Using it in an app",subheader:"No conversion step"}),e.jsx(m,{children:e.jsxs(l,{spacing:1.5,children:[e.jsxs(s,{variant:"body2",component:"p",children:["import ","{ setMuiTheme }"," from '@justbasicfacts/tokens';"]}),e.jsx(s,{variant:"body2",component:"p",children:"setMuiTheme(muiTheme) — an alias of setTheme, and it takes the same optional target element."}),e.jsx(B,{}),e.jsxs(s,{variant:"caption",color:"text.secondary",component:"p",children:[Object.keys(t).length," custom properties came out of that object, from the ",Object.keys(n).length," top-level keys it holds."]})]})})]})]})})}},oe=["ScopedThemes","ThemeEditor","MuiInterop"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Frame title="Several themes on one page" lead="setTheme takes a target element, so a theme can be scoped to a container instead of the document. These three panels are the same components under three presets, with nothing duplicated and no page CSS.">
      {/* Plain divs for the grids: a ui-box wraps its children in an inner div,
          so the columns would collapse to one. */}
      <div style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      alignItems: 'stretch'
    }}>
        {(['light', 'dark', 'brand'] as const).map(name => <Card key={name} elevated>
            <CardHeader title={name} subheader={themePresets[name].label} />
            <CardContent>
              <ThemeScope theme={themePresets[name].theme} padding={20} style={{
            height: '100%'
          }}>
                <DemoPanel compact />
              </ThemeScope>
            </CardContent>
          </Card>)}
      </div>

      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary" component="p">
            The dark preset is MUI's dark palette. The brand preset names a primary, a
            secondary and a radius, and everything else keeps the default, which is why a
            theme can be a dozen lines.
          </Typography>
        </CardContent>
      </Card>
    </Frame>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    primary: '#0f766e',
    secondary: '#f59e0b',
    error: '#dc2626',
    radius: 12,
    spacing: 8,
    fontFamily: ROBOTO
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Light or dark surfaces. The colour controls change the accents on top.'
    },
    primary: {
      control: 'color'
    },
    secondary: {
      control: 'color'
    },
    error: {
      control: 'color'
    },
    radius: {
      control: {
        type: 'range',
        min: 0,
        max: 24,
        step: 1
      }
    },
    spacing: {
      control: {
        type: 'range',
        min: 4,
        max: 16,
        step: 1
      }
    },
    fontFamily: {
      control: 'select',
      options: [ROBOTO, "system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif", "Georgia, 'Times New Roman', serif", "'Trebuchet MS', Verdana, sans-serif"]
    }
  },
  render: (args: EditorArgs) => {
    const theme = editorTheme(args);
    const vars = toCssVars(createTheme(theme));
    return (
      /* Scoped to the whole story, so the mode control darkens the page and not
         only the demo panel. */
      <ThemeScope theme={theme} fill>
        <Frame title="Build a theme in the panel" lead="Change any control and the components re-theme immediately. The values are the theme object; the list on the right is what it resolves to, which is exactly what setTheme writes onto the element.">
        <div style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'minmax(340px, 1fr) minmax(280px, 360px)',
            alignItems: 'start'
          }}>
          <Card>
            <CardContent>
              <DemoPanel />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Resolved colours" subheader={\`\${Object.keys(vars).length} variables in total\`} />
            <CardContent>
              <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  maxHeight: 420,
                  overflowY: 'auto'
                }}>
                {Object.entries(vars).filter(([name]) => name.startsWith('--ui-color-')).map(([name, value]) => <div key={name} style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                      <Typography variant="caption" component="p">
                        {name.replace('--ui-color-', '')}
                      </Typography>
                      <div style={{
                      display: 'flex',
                      gap: 8,
                      alignItems: 'center'
                    }}>
                        <Typography variant="caption" color="text.secondary" component="p">
                          {value}
                        </Typography>
                        <div style={{
                        width: 18,
                        height: 18,
                        background: value,
                        border: '1px solid var(--ui-color-divider)',
                        borderRadius: 4
                      }} />
                      </div>
                    </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
        </Frame>
      </ThemeScope>
    );
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    /** An MUI theme object, verbatim, including keys this library has no use for:
     *  the merge only reads the slots it knows, so the rest is inert. */
    const muiTheme = {
      palette: {
        mode: 'light',
        primary: {
          main: '#7c3aed',
          dark: '#5b21b6',
          light: '#c4b5fd',
          contrastText: '#ffffff'
        },
        secondary: {
          main: '#0ea5e9',
          dark: '#0369a1',
          contrastText: '#ffffff'
        },
        success: {
          main: '#15803d'
        },
        background: {
          paper: '#ffffff',
          default: '#faf5ff'
        },
        divider: 'rgba(124, 58, 237, 0.18)'
      },
      shape: {
        borderRadius: 16
      },
      spacing: 8,
      typography: {
        fontFamily: ROBOTO,
        fontSize: 14
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536
        }
      },
      transitions: {
        duration: {
          shortest: 150
        }
      },
      components: {
        MuiButton: {
          defaultProps: {
            disableElevation: true
          }
        }
      }
    } as unknown as UiTheme;
    const vars = themeVars(muiTheme);
    return <Frame title="An MUI theme, unchanged" lead="The token names mirror MUI's palette, so a theme object from a React app can be passed straight in. Keys this library has no equivalent for are ignored rather than rejected.">
        <div style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'minmax(340px, 1fr) minmax(280px, 360px)'
      }}>
          <Card>
            <CardContent>
              <ThemeScope theme={muiTheme}>
                <DemoPanel />
              </ThemeScope>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Using it in an app" subheader="No conversion step" />
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="body2" component="p">
                  import {'{ setMuiTheme }'} from '@justbasicfacts/tokens';
                </Typography>
                <Typography variant="body2" component="p">
                  setMuiTheme(muiTheme) — an alias of setTheme, and it takes the same
                  optional target element.
                </Typography>
                <Divider />
                <Typography variant="caption" color="text.secondary" component="p">
                  {Object.keys(vars).length} custom properties came out of that object, from
                  the {Object.keys(muiTheme).length} top-level keys it holds.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </div>
      </Frame>;
  }
}`,...u.parameters?.docs?.source}}};export{u as MuiInterop,f as ScopedThemes,g as ThemeEditor,oe as __namedExportsOrder,se as default};
