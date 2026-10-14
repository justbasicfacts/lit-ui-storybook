import{t as I,j as e,T as b,a as k,b as O,d as M,f as P}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{S as o}from"./stack-CyCBtdD3.js";import{T as t}from"./typography-EzvJpIOp.js";import{C as T}from"./card-B6nrhUw4.js";import{C as v}from"./card-content-Csonrox4.js";import{D as E}from"./divider-DIVxONPQ.js";import{B as p}from"./box-KqGNj84B.js";import{C as F}from"./card-header-0IX7hkmp.js";import{B as m}from"./button-BkvDz9MW.js";import{I as U}from"./input-DwbTq328.js";import{S as D}from"./select-4sV3CQFr.js";import{F as S}from"./form-control-label-IPUYddVd.js";import{S as A}from"./switch-jsDYIBw_.js";import{C as N}from"./checkbox-C--D5YRW.js";import{C as u}from"./chip-DysO06ov.js";import{A as V}from"./alert-Dkl1dwh9.js";import"./preload-helper-Bs85Y4nq.js";const C="'Roboto Condensed', system-ui, sans-serif",se={title:"Theming/Live theming",parameters:{layout:"fullscreen"}};function W(n){const a=n.trim();let i=255,r=255,s=255;if(a.startsWith("#")){const l=a.slice(1),c=l.length===3?l.split("").map(d=>d+d).join(""):l;i=Number.parseInt(c.slice(0,2),16),r=Number.parseInt(c.slice(2,4),16),s=Number.parseInt(c.slice(4,6),16)}else a.startsWith("rgb")&&([i,r,s]=a.replace(/^rgba?\(/,"").replace(/\).*$/,"").split(",").map(c=>Number.parseFloat(c)));return(.2126*i+.7152*r+.0722*s)/255}const x=n=>W(n)>.6?"rgba(0, 0, 0, 0.87)":"#ffffff";function j({compact:n=!1}){return e.jsxs(o,{spacing:20,children:[e.jsxs(o,{spacing:12,children:[e.jsx(t,{variant:"h6",component:"h3",children:"Buttons"}),e.jsxs(p,{display:"flex",gap:"12px",style:{flexWrap:"wrap",alignItems:"center"},children:[e.jsx(m,{children:"Primary"}),e.jsx(m,{variant:"secondary",children:"Secondary"}),e.jsx(m,{variant:"outline",children:"Outline"}),e.jsx(m,{variant:"ghost",children:"Ghost"}),e.jsx(m,{variant:"error",children:"Delete"})]})]}),e.jsxs(o,{spacing:12,children:[e.jsx(t,{variant:"h6",component:"h3",children:"Fields"}),e.jsxs(p,{display:"grid",gap:"16px",style:{gridTemplateColumns:n?"1fr":"1fr 1fr"},children:[e.jsx(U,{label:"Project",value:"Design system"}),e.jsx(D,{label:"Environment",options:["Preview","Staging","Production"],value:"Preview"})]}),e.jsxs(o,{spacing:8,children:[e.jsx(S,{label:"Email me on release",children:e.jsx(A,{checked:!0})}),e.jsx(S,{label:"Require review",children:e.jsx(N,{checked:!0})})]})]}),e.jsxs(o,{spacing:12,children:[e.jsx(t,{variant:"h6",component:"h3",children:"Status"}),e.jsxs(p,{display:"flex",gap:"8px",style:{flexWrap:"wrap"},children:[e.jsx(u,{label:"v0.5.5",variant:"filled"}),e.jsx(u,{label:"Lit",variant:"outlined"}),e.jsx(u,{label:"React",variant:"outlined"})]}),e.jsx(V,{severity:"success",title:"Theme applied",children:"Every component below reads the same variables, so they all moved together."})]})]})}const h={render:()=>e.jsxs(o,{spacing:24,children:[e.jsxs(o,{spacing:4,children:[e.jsx(t,{variant:"h4",component:"h1",children:"Several themes on one page"}),e.jsx(t,{variant:"body1",color:"text.secondary",component:"p",children:"setTheme takes a target element, so a theme can be scoped to a container instead of the document. These three panels are the same components under three presets; nothing is duplicated and nothing is overridden with page CSS."})]}),e.jsx(p,{display:"grid",gap:"20px",style:{gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))"},children:["light","dark","brand"].map(n=>e.jsxs(p,{display:"flex",style:{flexDirection:"column"},children:[e.jsx(t,{variant:"subtitle2",component:"p",children:k[n].label}),e.jsx(b,{theme:k[n].theme,padding:20,children:e.jsx(j,{compact:!0})})]},n))}),e.jsx(T,{children:e.jsx(v,{children:e.jsx(t,{variant:"body2",color:"text.secondary",component:"p",children:"The dark preset is MUI's dark palette, and the brand preset only names a primary, a secondary and a radius. Everything either one leaves out keeps the default, which is why a theme can be a dozen lines."})})})]})},z=n=>{const a=n.mode==="light",i=a?{}:P,r=i.palette??{},s=(R,B)=>R||B,l=s(n.primary,"#0f766e"),c=s(n.secondary,"#f59e0b"),d=s(n.error,"#dc2626"),w=s(n.text,a?"#0f172a":"#ffffff"),f=s(n.background,a?"#ffffff":"#121212");return{...i,palette:{...r,primary:{...r.primary,main:l,contrastText:x(l)},secondary:{...r.secondary,main:c,contrastText:x(c)},error:{...r.error,main:d,contrastText:x(d)},text:{...r.text,primary:w,secondary:a?"rgba(0, 0, 0, 0.6)":"rgba(255, 255, 255, 0.7)"},background:{...r.background,paper:f,default:f,surface:f},divider:a?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"},shape:{borderRadius:n.radius},spacing:n.spacing,typography:{fontFamily:n.fontFamily}}},y={args:{mode:"light",primary:"#0f766e",secondary:"#f59e0b",error:"#dc2626",text:"#0f172a",background:"#ffffff",radius:12,spacing:8,fontFamily:C},argTypes:{mode:{control:"inline-radio",options:["light","dark"]},primary:{control:"color"},secondary:{control:"color"},error:{control:"color"},text:{control:"color"},background:{control:"color"},radius:{control:{type:"range",min:0,max:24,step:1}},spacing:{control:{type:"range",min:4,max:16,step:1}},fontFamily:{control:"select",options:[C,"system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif","Georgia, 'Times New Roman', serif","'Trebuchet MS', Verdana, sans-serif"]}},render:n=>{const a=z(n),i=O(M(a));return e.jsxs(o,{spacing:24,children:[e.jsxs(o,{spacing:4,children:[e.jsx(t,{variant:"h4",component:"h1",children:"Build a theme in the panel"}),e.jsx(t,{variant:"body1",color:"text.secondary",component:"p",children:"Change any control and the components below re-theme immediately. The values are the theme object; the table on the right is what it resolves to, which is exactly what setTheme writes onto the element."})]}),e.jsxs(p,{display:"grid",gap:"20px",style:{gridTemplateColumns:"minmax(320px, 1fr) minmax(280px, 360px)"},children:[e.jsx(b,{theme:a,padding:20,children:e.jsx(j,{})}),e.jsxs(T,{children:[e.jsx(F,{title:"Resolved variables",subheader:`${Object.keys(i).length} custom properties`}),e.jsx(v,{children:e.jsx(o,{spacing:6,children:Object.entries(i).filter(([r])=>r.startsWith("--ui-color-")).map(([r,s])=>e.jsxs(p,{display:"flex",gap:"8px",style:{alignItems:"center",justifyContent:"space-between"},children:[e.jsx(t,{variant:"caption",component:"p",children:r.replace("--ui-color-","")}),e.jsxs(p,{display:"flex",gap:"8px",style:{alignItems:"center"},children:[e.jsx(t,{variant:"caption",color:"text.secondary",component:"p",children:s}),e.jsx("div",{style:{width:20,height:20,background:s,border:"1px solid var(--ui-color-divider)",borderRadius:4}})]})]},r))})})]})]}),e.jsx(t,{variant:"caption",color:"text.secondary",component:"p",children:"contrastText is derived from the colour you pick, so a light primary gets dark text on it. Radius, spacing and the font come from shape, spacing and typography in the same object."})]})}},g={render:()=>{const n={palette:{mode:"light",primary:{main:"#7c3aed",dark:"#5b21b6",light:"#c4b5fd",contrastText:"#ffffff"},secondary:{main:"#0ea5e9",dark:"#0369a1",contrastText:"#ffffff"},success:{main:"#15803d"},background:{paper:"#ffffff",default:"#faf5ff"},divider:"rgba(124, 58, 237, 0.18)"},shape:{borderRadius:16},spacing:8,typography:{fontFamily:"'Roboto Condensed', system-ui, sans-serif",fontSize:14},breakpoints:{values:{xs:0,sm:600,md:900,lg:1200,xl:1536}},transitions:{duration:{shortest:150}},components:{MuiButton:{defaultProps:{disableElevation:!0}}}},a=I(n);return e.jsxs(o,{spacing:24,children:[e.jsxs(o,{spacing:4,children:[e.jsx(t,{variant:"h4",component:"h1",children:"An MUI theme, unchanged"}),e.jsx(t,{variant:"body1",color:"text.secondary",component:"p",children:"The token names mirror MUI's palette, so a theme object from a React app can be passed straight in. Keys this library has no equivalent for (breakpoints, transitions, components) are ignored rather than rejected."})]}),e.jsx(b,{theme:n,padding:20,children:e.jsx(j,{})}),e.jsx(T,{children:e.jsx(v,{children:e.jsxs(o,{spacing:8,children:[e.jsx(t,{variant:"subtitle2",component:"p",children:"Using it in an app"}),e.jsxs(t,{variant:"body2",component:"p",children:["import ","{ setMuiTheme }"," from '@justbasicfacts/tokens';"]}),e.jsx(t,{variant:"body2",component:"p",children:"setMuiTheme(muiTheme) — an alias of setTheme, and it takes the same optional target element."}),e.jsx(E,{}),e.jsxs(t,{variant:"caption",color:"text.secondary",component:"p",children:[Object.keys(a).length," custom properties came out of that object, from the ",Object.keys(n).length," top-level keys it holds."]})]})})})]})}},ie=["ScopedThemes","ThemeEditor","MuiInterop"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={24}>
      <Stack spacing={4}>
        <Typography variant="h4" component="h1">
          Several themes on one page
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          setTheme takes a target element, so a theme can be scoped to a container instead
          of the document. These three panels are the same components under three presets;
          nothing is duplicated and nothing is overridden with page CSS.
        </Typography>
      </Stack>

      <Box display="grid" gap="20px" style={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
    }}>
        {(['light', 'dark', 'brand'] as const).map(name => <Box key={name} display="flex" style={{
        flexDirection: 'column'
      }}>
            <Typography variant="subtitle2" component="p">
              {themePresets[name].label}
            </Typography>
            <ThemeScope theme={themePresets[name].theme} padding={20}>
              <DemoPanel compact />
            </ThemeScope>
          </Box>)}
      </Box>

      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary" component="p">
            The dark preset is MUI's dark palette, and the brand preset only names a
            primary, a secondary and a radius. Everything either one leaves out keeps the
            default, which is why a theme can be a dozen lines.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    primary: '#0f766e',
    secondary: '#f59e0b',
    error: '#dc2626',
    text: '#0f172a',
    background: '#ffffff',
    radius: 12,
    spacing: 8,
    fontFamily: ROBOTO
  } as EditorArgs,
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['light', 'dark']
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
    text: {
      control: 'color'
    },
    background: {
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
    return <Stack spacing={24}>
        <Stack spacing={4}>
          <Typography variant="h4" component="h1">
            Build a theme in the panel
          </Typography>
          <Typography variant="body1" color="text.secondary" component="p">
            Change any control and the components below re-theme immediately. The values
            are the theme object; the table on the right is what it resolves to, which is
            exactly what setTheme writes onto the element.
          </Typography>
        </Stack>

        <Box display="grid" gap="20px" style={{
        gridTemplateColumns: 'minmax(320px, 1fr) minmax(280px, 360px)'
      }}>
          <ThemeScope theme={theme} padding={20}>
            <DemoPanel />
          </ThemeScope>

          <Card>
            <CardHeader title="Resolved variables" subheader={\`\${Object.keys(vars).length} custom properties\`} />
            <CardContent>
              <Stack spacing={6}>
                {Object.entries(vars).filter(([name]) => name.startsWith('--ui-color-')).map(([name, value]) => <Box key={name} display="flex" gap="8px" style={{
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                      <Typography variant="caption" component="p">
                        {name.replace('--ui-color-', '')}
                      </Typography>
                      <Box display="flex" gap="8px" style={{
                  alignItems: 'center'
                }}>
                        <Typography variant="caption" color="text.secondary" component="p">
                          {value}
                        </Typography>
                        <div style={{
                    width: 20,
                    height: 20,
                    background: value,
                    border: '1px solid var(--ui-color-divider)',
                    borderRadius: 4
                  }} />
                      </Box>
                    </Box>)}
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Typography variant="caption" color="text.secondary" component="p">
          contrastText is derived from the colour you pick, so a light primary gets dark
          text on it. Radius, spacing and the font come from shape, spacing and typography
          in the same object.
        </Typography>
      </Stack>;
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    /**
     * An MUI theme object, verbatim, including the keys this library has no use
     * for. The merge only reads the slots it knows, so the rest is inert.
     */
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
        fontFamily: "'Roboto Condensed', system-ui, sans-serif",
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
    return <Stack spacing={24}>
        <Stack spacing={4}>
          <Typography variant="h4" component="h1">
            An MUI theme, unchanged
          </Typography>
          <Typography variant="body1" color="text.secondary" component="p">
            The token names mirror MUI's palette, so a theme object from a React app can be
            passed straight in. Keys this library has no equivalent for (breakpoints,
            transitions, components) are ignored rather than rejected.
          </Typography>
        </Stack>

        <ThemeScope theme={muiTheme} padding={20}>
          <DemoPanel />
        </ThemeScope>

        <Card>
          <CardContent>
            <Stack spacing={8}>
              <Typography variant="subtitle2" component="p">
                Using it in an app
              </Typography>
              <Typography variant="body2" component="p">
                import {'{ setMuiTheme }'} from '@justbasicfacts/tokens';
              </Typography>
              <Typography variant="body2" component="p">
                setMuiTheme(muiTheme) — an alias of setTheme, and it takes the same optional
                target element.
              </Typography>
              <Divider />
              <Typography variant="caption" color="text.secondary" component="p">
                {Object.keys(vars).length} custom properties came out of that object, from
                the {Object.keys(muiTheme).length} top-level keys it holds.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>;
  }
}`,...g.parameters?.docs?.source}}};export{g as MuiInterop,h as ScopedThemes,y as ThemeEditor,ie as __namedExportsOrder,se as default};
