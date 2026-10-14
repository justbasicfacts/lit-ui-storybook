import{t as m,j as e,c as B,s as A,T as O,e as E,z as V,a as w,i as _}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{T as R,a as I,b as W,c as j,d,e as z}from"./table-cell-C-spKawb.js";import{D as $}from"./divider-DIVxONPQ.js";import{C as M}from"./card-B6nrhUw4.js";import{C as N}from"./card-content-Csonrox4.js";import{T as n}from"./typography-EzvJpIOp.js";import{S as o}from"./stack-CyCBtdD3.js";import{B as h}from"./box-KqGNj84B.js";import{C as P}from"./chip-DysO06ov.js";import{B as F}from"./button-BkvDz9MW.js";import{I as H}from"./input-DwbTq328.js";import"./preload-helper-Bs85Y4nq.js";const oe={title:"Theming/Overview",parameters:{layout:"fullscreen"}},S=["primary","secondary","error","warning","info","success"],U=[["","main"],["-dark","dark"],["-light","light"],["-contrast","contrastText"]],D=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button"],y=c=>_(c.theme)?w[c.theme]:w.light;function g({title:c,lead:r,children:p}){return e.jsxs(o,{spacing:24,children:[e.jsxs(o,{spacing:4,children:[e.jsx(n,{variant:"h4",component:"h1",children:c}),e.jsx(n,{variant:"body1",color:"text.secondary",component:"p",children:r})]}),p]})}function C({token:c,value:r}){return e.jsxs(h,{style:{width:148},children:[e.jsx("div",{style:{height:56,background:r,border:"1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12))",borderRadius:8}}),e.jsx(n,{variant:"caption",color:"text.secondary",component:"p",children:c}),e.jsx(n,{variant:"caption",component:"p",children:r})]})}const u={render:(c,r)=>{const{label:p,theme:l}=y(r.globals),s=m(l);return e.jsxs(g,{title:"Theming",lead:"Every component reads its design values from --ui-* custom properties with a fallback, so one theme object restyles the whole library and nothing has to be recompiled.",children:[e.jsxs(o,{spacing:16,children:[e.jsx(n,{variant:"h6",component:"h2",children:"The whole contract"}),e.jsx(n,{variant:"body1",component:"p",children:"A theme is a plain object of the values you care about. Everything you leave out keeps the default, and the result is written as custom properties on the element you pass in, which is how a single page can show two themes at once."}),e.jsxs(h,{border:"1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12))",radius:"8px",padding:"16px",bgcolor:"background.muted",children:[e.jsxs(n,{variant:"body2",component:"p",children:["import ","{ createTheme, setTheme }"," from '@justbasicfacts/tokens';"]}),e.jsxs(n,{variant:"body2",component:"p",children:["setTheme(createTheme(","{"," palette: ","{"," primary: ","{"," main: '#0f766e' ","}"," ","}",", shape: ","{"," borderRadius: 12 ","}"," ","}","));"]})]}),e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:"The shape matches MUI's theme, so an existing MUI theme object can be passed straight to setTheme (also exported as setMuiTheme)."})]}),e.jsxs(o,{spacing:16,children:[e.jsx(n,{variant:"h6",component:"h2",children:"What the current theme resolves to"}),e.jsxs(n,{variant:"body1",component:"p",children:["Active preset: ",e.jsx("strong",{children:p}),". It writes ",B(s).length," ","colour variables, ",A(s).length," scale variables and"," ",Object.keys(s).filter(t=>t.startsWith("--ui-zindex-")).length," ","layer variables onto the element that carries it."]}),e.jsx(h,{children:e.jsx(P,{label:"Toolbar: change theme",variant:"outlined",nowrap:!0})})]})]})}},x={render:(c,r)=>{const{theme:p}=y(r.globals),l=m(p),s=B(l).filter(([t])=>!S.some(i=>t.startsWith(`--ui-color-${i}`)));return e.jsxs(g,{title:"Palette",lead:"Six tones, each with a main value and optional dark, light and contrast shades, plus the text, background and action colours the components read.",children:[e.jsx(o,{spacing:20,children:S.map(t=>e.jsxs(o,{spacing:8,children:[e.jsx(n,{variant:"subtitle2",component:"h3",children:t}),e.jsx(h,{display:"flex",gap:"16px",style:{flexWrap:"wrap"},children:U.map(([i,a])=>{const f=`--ui-color-${t}${i}`,k=l[f];return k?e.jsx(C,{token:a,value:k},f):null})})]},t))}),e.jsxs(o,{spacing:16,children:[e.jsx(n,{variant:"h6",component:"h2",children:"Text, background and states"}),e.jsx(h,{display:"flex",gap:"16px",style:{flexWrap:"wrap"},children:s.map(([t,i])=>e.jsx(C,{token:t.replace("--ui-color-",""),value:i},t))})]})]})}},b={render:(c,r)=>{const{theme:p}=y(r.globals),l=m(p),s=l["--ui-font"]??"(component default)",t=l["--ui-font-heading"]??s;return e.jsxs(g,{title:"Type scale",lead:"Thirteen variants. Each one maps to a semantic tag unless you pass component, which is what keeps a heading outline honest when the value is not a title.",children:[e.jsxs(o,{spacing:4,children:[e.jsx(n,{variant:"subtitle2",component:"p",children:"Body face"}),e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:s}),e.jsx(n,{variant:"subtitle2",component:"p",children:"Heading face"}),e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:t})]}),e.jsx(o,{spacing:16,children:D.map(i=>e.jsxs(o,{spacing:4,children:[e.jsxs(n,{variant:"caption",color:"text.secondary",component:"p",children:[i," · line-height"," ",l[`--ui-line-height-${i}`]??"component default"]}),e.jsx(n,{variant:i,component:"p",children:"The quick brown fox jumps over the lazy dog"})]},i))})]})}},v={render:(c,r)=>{const{theme:p}=y(r.globals),l=m(p),s=Number.parseInt(l["--ui-spacing"]??"8",10)||8,t=[0,4,12,24],i=e.jsxs(o,{spacing:12,children:[e.jsx(F,{children:"Save changes"}),e.jsx(H,{label:"Team name",value:"Design system"}),e.jsx(P,{label:"Outlined chip",variant:"outlined"})]});return e.jsxs(g,{title:"Shape, spacing and elevation",lead:"Radius, the spacing unit, elevation shadows and the layer stack are theme slots too. Radius is the fastest one to feel: the panels below are the same components under four values of shape.borderRadius.",children:[e.jsxs(o,{spacing:12,children:[e.jsx(n,{variant:"h6",component:"h2",children:"shape.borderRadius"}),e.jsx(h,{display:"flex",gap:"16px",style:{flexWrap:"wrap"},children:t.map(a=>e.jsx(h,{style:{minWidth:200,flex:"1 1 200px"},children:e.jsx(O,{theme:{shape:{borderRadius:a}},padding:16,children:e.jsxs(o,{spacing:8,children:[e.jsxs(n,{variant:"caption",component:"p",children:["borderRadius: ",a]}),i]})})},a))})]}),e.jsxs(o,{spacing:12,children:[e.jsx(n,{variant:"h6",component:"h2",children:"spacing"}),e.jsxs(n,{variant:"body2",color:"text.secondary",component:"p",children:["Base unit ",s,"px. Components multiply it; a container or stack takes the unit count to space its children."]}),e.jsx(o,{spacing:6,children:[1,2,3,4,6].map(a=>e.jsxs(h,{display:"flex",gap:"12px",style:{alignItems:"center"},children:[e.jsx(h,{bgcolor:"primary",radius:"4px",style:{height:16,width:a*s}}),e.jsxs(n,{variant:"caption",component:"p",children:[a," × ",s,"px = ",a*s,"px"]})]},a))})]}),e.jsxs(o,{spacing:12,children:[e.jsx(n,{variant:"h6",component:"h2",children:"elevation"}),e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:"A number picks a shadow; the components carry MUI-shaped defaults until a theme sets its own shadows."}),e.jsx(h,{display:"flex",gap:"24px",style:{flexWrap:"wrap"},children:E.map(a=>e.jsx(h,{bgcolor:"background.paper",elevation:a,padding:"16px",radius:"8px",style:{width:120},children:e.jsxs(n,{variant:"caption",component:"p",children:["elevation ",a]})},a))})]}),e.jsxs(o,{spacing:12,children:[e.jsx(n,{variant:"h6",component:"h2",children:"zIndex"}),e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:"Layer order, keyed like MUI's theme.zIndex. The values come from the active theme, so a theme can raise one layer without touching the components."}),e.jsx(R,{children:e.jsxs(I,{size:"small",children:[e.jsx(W,{children:e.jsxs(j,{children:[e.jsx(d,{variant:"head",children:"layer"}),e.jsx(d,{variant:"head",align:"right",children:"value"})]})}),e.jsx(z,{children:V.map(a=>e.jsxs(j,{children:[e.jsx(d,{children:a}),e.jsx(d,{align:"right",children:l[`--ui-zindex-${a.toLowerCase()}`]??"component default"})]},a))})]})})]})]})}},T={render:(c,r)=>{const{theme:p,label:l}=y(r.globals),s=m(p),t=Object.entries(s),i=([a])=>a.startsWith("--ui-color-")?"colour":a.startsWith("--ui-shadow-")?"shadow":a.startsWith("--ui-zindex-")?"layer":"scale";return e.jsxs(g,{title:"Every variable",lead:`All ${t.length} custom properties the preset "${l}" resolves to. Anything not listed keeps the component default, so a theme only has to name what it wants to change.`,children:[e.jsx(R,{children:e.jsxs(I,{size:"small",children:[e.jsx(W,{children:e.jsxs(j,{children:[e.jsx(d,{variant:"head",children:"variable"}),e.jsx(d,{variant:"head",children:"group"}),e.jsx(d,{variant:"head",children:"value"})]})}),e.jsx(z,{children:t.map(a=>e.jsxs(j,{children:[e.jsx(d,{children:a[0]}),e.jsx(d,{children:i(a)}),e.jsx(d,{children:a[1]})]},a[0]))})]})}),e.jsx($,{}),e.jsx(M,{children:e.jsx(N,{children:e.jsx(n,{variant:"body2",color:"text.secondary",component:"p",children:"Variables are written as inline styles on the theme's target element, so they cascade into every shadow root below it. clearTheme() removes them again and the components fall back to their own defaults."})})})]})}},se=["HowItWorks","Palette","TypeScale","Scales","AllTokens"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      label,
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    return <Page title="Theming" lead="Every component reads its design values from --ui-* custom properties with a fallback, so one theme object restyles the whole library and nothing has to be recompiled.">
        <Stack spacing={16}>
          <Typography variant="h6" component="h2">
            The whole contract
          </Typography>
          <Typography variant="body1" component="p">
            A theme is a plain object of the values you care about. Everything you leave
            out keeps the default, and the result is written as custom properties on the
            element you pass in, which is how a single page can show two themes at once.
          </Typography>
          <Box border="1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12))" radius="8px" padding="16px" bgcolor="background.muted">
            <Typography variant="body2" component="p">
              import {'{ createTheme, setTheme }'} from '@justbasicfacts/tokens';
            </Typography>
            <Typography variant="body2" component="p">
              setTheme(createTheme({'{'} palette: {'{'} primary: {'{'} main: '#0f766e' {'}'} {'}'},
              shape: {'{'} borderRadius: 12 {'}'} {'}'}));
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" component="p">
            The shape matches MUI's theme, so an existing MUI theme object can be passed
            straight to setTheme (also exported as setMuiTheme).
          </Typography>
        </Stack>

        <Stack spacing={16}>
          <Typography variant="h6" component="h2">
            What the current theme resolves to
          </Typography>
          <Typography variant="body1" component="p">
            Active preset: <strong>{label}</strong>. It writes {colorVars(vars).length}{' '}
            colour variables, {scaleVars(vars).length} scale variables and{' '}
            {Object.keys(vars).filter(name => name.startsWith('--ui-zindex-')).length}{' '}
            layer variables onto the element that carries it.
          </Typography>
          <Box>
            <Chip label="Toolbar: change theme" variant="outlined" nowrap />
          </Box>
        </Stack>
      </Page>;
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const rest = colorVars(vars).filter(([name]) => !TONES.some(tone => name.startsWith(\`--ui-color-\${tone}\`)));
    return <Page title="Palette" lead="Six tones, each with a main value and optional dark, light and contrast shades, plus the text, background and action colours the components read.">
        <Stack spacing={20}>
          {TONES.map(tone => <Stack key={tone} spacing={8}>
              <Typography variant="subtitle2" component="h3">
                {tone}
              </Typography>
              <Box display="flex" gap="16px" style={{
            flexWrap: 'wrap'
          }}>
                {TONE_PARTS.map(([suffix, part]) => {
              const token = \`--ui-color-\${tone}\${suffix}\`;
              const value = vars[token];
              return value ? <Swatch key={token} token={part} value={value} /> : null;
            })}
              </Box>
            </Stack>)}
        </Stack>

        <Stack spacing={16}>
          <Typography variant="h6" component="h2">
            Text, background and states
          </Typography>
          <Box display="flex" gap="16px" style={{
          flexWrap: 'wrap'
        }}>
            {rest.map(([token, value]) => <Swatch key={token} token={token.replace('--ui-color-', '')} value={value} />)}
          </Box>
        </Stack>
      </Page>;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const family = vars['--ui-font'] ?? '(component default)';
    const headingFamily = vars['--ui-font-heading'] ?? family;
    return <Page title="Type scale" lead="Thirteen variants. Each one maps to a semantic tag unless you pass component, which is what keeps a heading outline honest when the value is not a title.">
        <Stack spacing={4}>
          <Typography variant="subtitle2" component="p">
            Body face
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            {family}
          </Typography>
          <Typography variant="subtitle2" component="p">
            Heading face
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            {headingFamily}
          </Typography>
        </Stack>

        <Stack spacing={16}>
          {VARIANTS.map(variant => <Stack key={variant} spacing={4}>
              <Typography variant="caption" color="text.secondary" component="p">
                {variant} · line-height{' '}
                {vars[\`--ui-line-height-\${variant}\`] ?? 'component default'}
              </Typography>
              <Typography variant={variant} component="p">
                The quick brown fox jumps over the lazy dog
              </Typography>
            </Stack>)}
        </Stack>
      </Page>;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const spacing = Number.parseInt(vars['--ui-spacing'] ?? '8', 10) || 8;
    const steps = [0, 4, 12, 24];
    const demo = <Stack spacing={12}>
        <Button>Save changes</Button>
        <Input label="Team name" value="Design system" />
        <Chip label="Outlined chip" variant="outlined" />
      </Stack>;
    return <Page title="Shape, spacing and elevation" lead="Radius, the spacing unit, elevation shadows and the layer stack are theme slots too. Radius is the fastest one to feel: the panels below are the same components under four values of shape.borderRadius.">
        <Stack spacing={12}>
          <Typography variant="h6" component="h2">
            shape.borderRadius
          </Typography>
          <Box display="flex" gap="16px" style={{
          flexWrap: 'wrap'
        }}>
            {steps.map(borderRadius => <Box key={borderRadius} style={{
            minWidth: 200,
            flex: '1 1 200px'
          }}>
                <ThemeScope theme={{
              shape: {
                borderRadius
              }
            }} padding={16}>
                  <Stack spacing={8}>
                    <Typography variant="caption" component="p">
                      borderRadius: {borderRadius}
                    </Typography>
                    {demo}
                  </Stack>
                </ThemeScope>
              </Box>)}
          </Box>
        </Stack>

        <Stack spacing={12}>
          <Typography variant="h6" component="h2">
            spacing
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            Base unit {spacing}px. Components multiply it; a container or stack takes the
            unit count to space its children.
          </Typography>
          <Stack spacing={6}>
            {[1, 2, 3, 4, 6].map(units => <Box key={units} display="flex" gap="12px" style={{
            alignItems: 'center'
          }}>
                <Box bgcolor="primary" radius="4px" style={{
              height: 16,
              width: units * spacing
            }} />
                <Typography variant="caption" component="p">
                  {units} × {spacing}px = {units * spacing}px
                </Typography>
              </Box>)}
          </Stack>
        </Stack>

        <Stack spacing={12}>
          <Typography variant="h6" component="h2">
            elevation
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            A number picks a shadow; the components carry MUI-shaped defaults until a
            theme sets its own shadows.
          </Typography>
          <Box display="flex" gap="24px" style={{
          flexWrap: 'wrap'
        }}>
            {elevationSteps.map(elevation => <Box key={elevation} bgcolor="background.paper" elevation={elevation} padding="16px" radius="8px" style={{
            width: 120
          }}>
                <Typography variant="caption" component="p">
                  elevation {elevation}
                </Typography>
              </Box>)}
          </Box>
        </Stack>

        <Stack spacing={12}>
          <Typography variant="h6" component="h2">
            zIndex
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            Layer order, keyed like MUI's theme.zIndex. The values come from the active
            theme, so a theme can raise one layer without touching the components.
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell variant="head">layer</TableCell>
                  <TableCell variant="head" align="right">
                    value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {zIndexLayers.map(layer => <TableRow key={layer}>
                    <TableCell>{layer}</TableCell>
                    <TableCell align="right">
                      {vars[\`--ui-zindex-\${layer.toLowerCase()}\`] ?? 'component default'}
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Page>;
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => {
    const {
      theme,
      label
    } = presetFrom(context.globals);
    const vars = themeVars(theme);
    const entries = Object.entries(vars);
    const groupOf = ([name]: [string, string]) => name.startsWith('--ui-color-') ? 'colour' : name.startsWith('--ui-shadow-') ? 'shadow' : name.startsWith('--ui-zindex-') ? 'layer' : 'scale';
    return <Page title="Every variable" lead={\`All \${entries.length} custom properties the preset "\${label}" resolves to. Anything not listed keeps the component default, so a theme only has to name what it wants to change.\`}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell variant="head">variable</TableCell>
                <TableCell variant="head">group</TableCell>
                <TableCell variant="head">value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map(entry => <TableRow key={entry[0]}>
                  <TableCell>{entry[0]}</TableCell>
                  <TableCell>{groupOf(entry)}</TableCell>
                  <TableCell>{entry[1]}</TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />
        <Card>
          <CardContent>
            <Typography variant="body2" color="text.secondary" component="p">
              Variables are written as inline styles on the theme's target element, so they
              cascade into every shadow root below it. clearTheme() removes them again and
              the components fall back to their own defaults.
            </Typography>
          </CardContent>
        </Card>
      </Page>;
  }
}`,...T.parameters?.docs?.source}}};export{T as AllTokens,u as HowItWorks,x as Palette,v as Scales,b as TypeScale,se as __namedExportsOrder,oe as default};
