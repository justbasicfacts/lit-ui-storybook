import{j as e}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{B as t}from"./box-KqGNj84B.js";import{S as n}from"./stack-CyCBtdD3.js";import{T as o}from"./typography-EzvJpIOp.js";import{C as i}from"./card-B6nrhUw4.js";import{C as l}from"./card-header-0IX7hkmp.js";import{C as p}from"./card-content-Csonrox4.js";import{I as m}from"./input-DwbTq328.js";import{S as h}from"./select-4sV3CQFr.js";import{T as x}from"./textarea-CmDRTtHH.js";import{D as c}from"./divider-DIVxONPQ.js";import{F as y}from"./form-control-label-IPUYddVd.js";import{S as g}from"./switch-jsDYIBw_.js";import{R as f,a as d}from"./radio-group-o6mu-wzD.js";import{S as v}from"./slider-B2kn3dRQ.js";import{A as b}from"./alert-Dkl1dwh9.js";import{B as r}from"./button-BkvDz9MW.js";import"./preload-helper-Bs85Y4nq.js";const P={title:"Examples/Settings",parameters:{layout:"fullscreen"}},j=[{label:"Releases",detail:"When a package is published",on:!0},{label:"Review requests",detail:"When someone asks for your review",on:!0},{label:"Weekly digest",detail:"A summary every Monday",on:!1}];function C({children:a}){return e.jsxs(n,{spacing:16,children:[e.jsx(c,{}),a]})}const s={render:()=>e.jsx(t,{padding:"24px",style:{maxWidth:720},children:e.jsxs(n,{spacing:24,children:[e.jsxs(n,{spacing:4,children:[e.jsx(o,{variant:"h4",component:"h1",children:"Settings"}),e.jsx(o,{variant:"body1",color:"text.secondary",component:"p",children:"A form laid out with cards, fields and switches. Everything here is a component; the page brings no styling of its own beyond the layout."})]}),e.jsxs(i,{children:[e.jsx(l,{title:"Profile",subheader:"Shown to the rest of the team"}),e.jsx(p,{children:e.jsxs(n,{spacing:16,children:[e.jsxs(t,{display:"grid",gap:"16px",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"},children:[e.jsx(m,{label:"Full name",value:"Anil Okay",required:!0}),e.jsx(m,{label:"Email",type:"email",value:"anil@example.com",required:!0}),e.jsx(h,{label:"Time zone",options:["Europe/Berlin","Europe/London","America/New_York"],value:"Europe/Berlin"}),e.jsx(h,{label:"Language",options:["English","German","Turkish"],value:"English"})]}),e.jsx(x,{label:"About",rows:3,value:"Frontend developer, sixteen years in.",helperText:"A sentence or two, visible on your profile."})]})})]}),e.jsxs(i,{children:[e.jsx(l,{title:"Notifications",subheader:"Email only, no noise"}),e.jsx(p,{children:e.jsx(n,{spacing:8,children:j.map((a,u)=>e.jsxs(t,{children:[u>0?e.jsx(c,{}):null,e.jsxs(t,{display:"flex",gap:"16px",padding:"12px 0",style:{alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(n,{spacing:2,children:[e.jsx(o,{variant:"body1",component:"p",children:a.label}),e.jsx(o,{variant:"caption",color:"text.secondary",component:"p",children:a.detail})]}),e.jsx(y,{label:"",children:e.jsx(g,{checked:a.on})})]})]},a.label))})})]}),e.jsxs(i,{children:[e.jsx(l,{title:"Appearance",subheader:"How the library looks for you"}),e.jsx(p,{children:e.jsxs(n,{spacing:20,children:[e.jsxs(f,{value:"system",orientation:"horizontal",children:[e.jsx(d,{value:"light",label:"Light"}),e.jsx(d,{value:"dark",label:"Dark"}),e.jsx(d,{value:"system",label:"Match system"})]}),e.jsx(v,{label:"Interface density",value:3,min:1,max:5,step:1,showValue:!0}),e.jsx(o,{variant:"caption",color:"text.secondary",component:"p",children:"Appearance mirrors the theme tokens: the same slots your app sets with setTheme."})]})})]}),e.jsxs(C,{children:[e.jsx(b,{severity:"warning",title:"Danger zone",children:"Deleting your account removes your profile, your saved themes and your API tokens. This cannot be undone."}),e.jsxs(t,{display:"flex",gap:"12px",children:[e.jsx(r,{variant:"error",children:"Delete account"}),e.jsx(r,{variant:"ghost",children:"Export my data"})]})]}),e.jsx(c,{}),e.jsxs(t,{display:"flex",gap:"12px",style:{justifyContent:"flex-end"},children:[e.jsx(r,{variant:"ghost",children:"Cancel"}),e.jsx(r,{children:"Save changes"})]})]})})},_=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box padding="24px" style={{
    maxWidth: 720
  }}>
      <Stack spacing={24}>
        <Stack spacing={4}>
          <Typography variant="h4" component="h1">
            Settings
          </Typography>
          <Typography variant="body1" color="text.secondary" component="p">
            A form laid out with cards, fields and switches. Everything here is a
            component; the page brings no styling of its own beyond the layout.
          </Typography>
        </Stack>

        <Card>
          <CardHeader title="Profile" subheader="Shown to the rest of the team" />
          <CardContent>
            <Stack spacing={16}>
              <Box display="grid" gap="16px" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'
            }}>
                <Input label="Full name" value="Anil Okay" required />
                <Input label="Email" type="email" value="anil@example.com" required />
                <Select label="Time zone" options={['Europe/Berlin', 'Europe/London', 'America/New_York']} value="Europe/Berlin" />
                <Select label="Language" options={['English', 'German', 'Turkish']} value="English" />
              </Box>
              <Textarea label="About" rows={3} value="Frontend developer, sixteen years in." helperText="A sentence or two, visible on your profile." />
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Notifications" subheader="Email only, no noise" />
          <CardContent>
            <Stack spacing={8}>
              {NOTIFICATIONS.map((item, index) => <Box key={item.label}>
                  {index > 0 ? <Divider /> : null}
                  <Box display="flex" gap="16px" padding="12px 0" style={{
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                    <Stack spacing={2}>
                      <Typography variant="body1" component="p">
                        {item.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" component="p">
                        {item.detail}
                      </Typography>
                    </Stack>
                    <FormControlLabel label="">
                      <Switch checked={item.on} />
                    </FormControlLabel>
                  </Box>
                </Box>)}
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Appearance" subheader="How the library looks for you" />
          <CardContent>
            <Stack spacing={20}>
              <RadioGroup value="system" orientation="horizontal">
                <Radio value="light" label="Light" />
                <Radio value="dark" label="Dark" />
                <Radio value="system" label="Match system" />
              </RadioGroup>
              <Slider label="Interface density" value={3} min={1} max={5} step={1} showValue />
              <Typography variant="caption" color="text.secondary" component="p">
                Appearance mirrors the theme tokens: the same slots your app sets with
                setTheme.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Section>
          <Alert severity="warning" title="Danger zone">
            Deleting your account removes your profile, your saved themes and your API
            tokens. This cannot be undone.
          </Alert>
          <Box display="flex" gap="12px">
            <Button variant="error">Delete account</Button>
            <Button variant="ghost">Export my data</Button>
          </Box>
        </Section>

        <Divider />
        <Box display="flex" gap="12px" style={{
        justifyContent: 'flex-end'
      }}>
          <Button variant="ghost">Cancel</Button>
          <Button>Save changes</Button>
        </Box>
      </Stack>
    </Box>
}`,...s.parameters?.docs?.source}}};export{s as Default,_ as __namedExportsOrder,P as default};
