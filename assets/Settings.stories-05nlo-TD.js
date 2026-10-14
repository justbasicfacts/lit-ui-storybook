import{j as e}from"./iframe-BGBv2Rkz.js";import"./index-Ds1DpZoa.js";import{B as r}from"./box-HclkYR2K.js";import{S as n}from"./stack-CMVsJ6e_.js";import{T as a}from"./typography-Bk9oATh-.js";import{C as o}from"./card-Bso1jyN7.js";import{C as i}from"./card-header-DULaIHSg.js";import{C as s}from"./card-content-fPXuiB19.js";import{I as c}from"./input-BMmwR3ji.js";import{S as m}from"./select-7JgTCnEp.js";import{T as u}from"./textarea-B8nw9K4K.js";import{D as x}from"./divider-BwawZkRe.js";import{F as y}from"./form-control-label-BSa8HeP2.js";import{S as g}from"./switch-B5dfOSuU.js";import{R as v,a as p}from"./radio-group-4UpvARDr.js";import{S as f}from"./slider-EXZ9kGZJ.js";import{A as b}from"./alert-D5WYbRzG.js";import{B as l}from"./button-umO8R3TU.js";import"./preload-helper-Bs85Y4nq.js";const W={title:"Examples/Settings",parameters:{layout:"fullscreen"}},j=[{label:"Releases",detail:"When a package is published",on:!0},{label:"Review requests",detail:"When someone asks for your review",on:!0},{label:"Weekly digest",detail:"A summary every Monday",on:!1}],d={render:()=>e.jsx(r,{padding:"32px",children:e.jsx(r,{style:{maxWidth:840,margin:"0 auto"},children:e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:.5,children:[e.jsx(a,{variant:"h4",component:"h1",children:"Settings"}),e.jsx(a,{variant:"body1",color:"text.secondary",component:"p",children:"A form laid out with cards, fields and switches. Everything here is a component; the page brings no styling of its own beyond the layout."})]}),e.jsxs(o,{children:[e.jsx(i,{title:"Profile",subheader:"Shown to the rest of the team"}),e.jsx(s,{children:e.jsxs(n,{spacing:2,children:[e.jsxs("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(190px, 1fr))"},children:[e.jsx(c,{label:"Full name",value:"Anil Okay",required:!0}),e.jsx(c,{label:"Email",type:"email",value:"anil@example.com",required:!0}),e.jsx(m,{label:"Time zone",options:["Europe/Berlin","Europe/London","America/New_York"],value:"Europe/Berlin"}),e.jsx(m,{label:"Language",options:["English","German","Turkish"],value:"English"})]}),e.jsx(u,{label:"About",rows:3,value:"Frontend developer, sixteen years in.",helperText:"A sentence or two, visible on your profile."})]})})]}),e.jsxs(o,{children:[e.jsx(i,{title:"Notifications",subheader:"Email only, no noise"}),e.jsx(s,{children:e.jsx(n,{spacing:0,children:j.map((t,h)=>e.jsxs(r,{children:[h>0?e.jsx(x,{}):null,e.jsxs("div",{style:{display:"flex",gap:16,padding:"12px 0",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(n,{spacing:.25,children:[e.jsx(a,{variant:"body1",component:"p",children:t.label}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:t.detail})]}),e.jsx(y,{label:"",children:e.jsx(g,{checked:t.on})})]})]},t.label))})})]}),e.jsxs(o,{children:[e.jsx(i,{title:"Appearance",subheader:"How the library looks for you"}),e.jsx(s,{children:e.jsxs(n,{spacing:3,children:[e.jsxs(v,{value:"system",orientation:"horizontal",children:[e.jsx(p,{value:"light",label:"Light"}),e.jsx(p,{value:"dark",label:"Dark"}),e.jsx(p,{value:"system",label:"Match system"})]}),e.jsx(f,{label:"Interface density",value:3,min:1,max:5,step:1,showValue:!0}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:"Appearance mirrors the theme tokens: the same slots your app sets with setTheme."})]})})]}),e.jsxs(o,{children:[e.jsx(i,{title:"Danger zone"}),e.jsx(s,{children:e.jsxs(n,{spacing:2,children:[e.jsx(b,{severity:"warning",children:"Deleting your account removes your profile, your saved themes and your API tokens. This cannot be undone."}),e.jsxs(r,{display:"flex",gap:"12px",children:[e.jsx(l,{variant:"error",children:"Delete account"}),e.jsx(l,{variant:"ghost",children:"Export my data"})]})]})})]}),e.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end"},children:[e.jsx(l,{variant:"ghost",children:"Cancel"}),e.jsx(l,{children:"Save changes"})]})]})})})},P=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box padding="32px">
      <Box style={{
      maxWidth: 840,
      margin: '0 auto'
    }}>
        <Stack spacing={3}>
          <Stack spacing={0.5}>
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
              <Stack spacing={2}>
                <div style={{
                display: 'grid',
                gap: 16,
                gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))'
              }}>
                  <Input label="Full name" value="Anil Okay" required />
                  <Input label="Email" type="email" value="anil@example.com" required />
                  <Select label="Time zone" options={['Europe/Berlin', 'Europe/London', 'America/New_York']} value="Europe/Berlin" />
                  <Select label="Language" options={['English', 'German', 'Turkish']} value="English" />
                </div>
                <Textarea label="About" rows={3} value="Frontend developer, sixteen years in." helperText="A sentence or two, visible on your profile." />
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Notifications" subheader="Email only, no noise" />
            <CardContent>
              <Stack spacing={0}>
                {NOTIFICATIONS.map((item, index) => <Box key={item.label}>
                    {index > 0 ? <Divider /> : null}
                    <div style={{
                  display: 'flex',
                  gap: 16,
                  padding: '12px 0',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                      <Stack spacing={0.25}>
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
                    </div>
                  </Box>)}
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Appearance" subheader="How the library looks for you" />
            <CardContent>
              <Stack spacing={3}>
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

          <Card>
            <CardHeader title="Danger zone" />
            <CardContent>
              <Stack spacing={2}>
                <Alert severity="warning">
                  Deleting your account removes your profile, your saved themes and your
                  API tokens. This cannot be undone.
                </Alert>
                <Box display="flex" gap="12px">
                  <Button variant="error">Delete account</Button>
                  <Button variant="ghost">Export my data</Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <div style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'flex-end'
        }}>
            <Button variant="ghost">Cancel</Button>
            <Button>Save changes</Button>
          </div>
        </Stack>
      </Box>
    </Box>
}`,...d.parameters?.docs?.source}}};export{d as Default,P as __namedExportsOrder,W as default};
