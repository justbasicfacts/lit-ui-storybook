import{j as n,u as h}from"./iframe-BOtHSW94.js";import"./index-BSSMaTAd.js";import{C as c}from"./card-HAj1jThK.js";import{C as d}from"./card-content-KILzrGcc.js";import{S as r}from"./stack-PU_AZfnY.js";import{T as e}from"./typography-Cc_iDT_f.js";import{I as i}from"./input-CKsM46XL.js";import{F as m}from"./form-control-label-DJF4rCz6.js";import{C as x}from"./checkbox-D_WDTGi0.js";import{L as s}from"./link-vEq8KKJL.js";import{B as o}from"./button-DCboYVE-.js";import{D as l}from"./divider-12VBWgcT.js";import{A as g}from"./alert-B8J9cNSX.js";import"./preload-helper-Bs85Y4nq.js";const q={title:"Examples/Sign in",parameters:{layout:"fullscreen"}};function p({children:u}){const y=h();return n.jsx("div",{style:{display:"flex",padding:y?"48px 24px":"24px 16px",background:"var(--ui-color-bg-muted)",minHeight:"100vh",alignItems:"flex-start",justifyContent:"center"},children:n.jsx("div",{style:{width:"100%",maxWidth:420},children:u})})}const t={render:()=>n.jsx(p,{children:n.jsx(c,{elevated:!0,children:n.jsx(d,{children:n.jsxs(r,{spacing:2.5,children:[n.jsxs(r,{spacing:.5,children:[n.jsx(e,{variant:"h5",component:"h1",children:"Sign in"}),n.jsx(e,{variant:"body2",color:"text.secondary",component:"p",children:"Use your work account to open the design system."})]}),n.jsxs(r,{spacing:2,children:[n.jsx(i,{label:"Email",type:"email",value:"anil@example.com",required:!0}),n.jsx(i,{label:"Password",type:"password",value:"••••••••",required:!0})]}),n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",justifyContent:"space-between"},children:[n.jsx(m,{label:"Remember me",controlPosition:"start",children:n.jsx(x,{slot:"control",checked:!0})}),n.jsx(e,{variant:"body2",component:"p",children:n.jsx(s,{href:"#reset",color:"primary",underline:"always",children:"Forgot password?"})})]}),n.jsx(o,{fullWidth:!0,children:"Sign in"}),n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[n.jsx("div",{style:{flex:1},children:n.jsx(l,{})}),n.jsx(e,{variant:"caption",color:"text.secondary",component:"p",children:"or"}),n.jsx("div",{style:{flex:1},children:n.jsx(l,{})})]}),n.jsxs(r,{spacing:1,children:[n.jsx(o,{variant:"outline",fullWidth:!0,children:"Continue with GitHub"}),n.jsx(o,{variant:"ghost",fullWidth:!0,children:"Continue with Google"})]}),n.jsxs(e,{variant:"body2",color:"text.secondary",component:"p",children:["No account?"," ",n.jsx(s,{href:"#create",color:"primary",underline:"always",children:"Create one"})]})]})})})})},a={render:()=>n.jsx(p,{children:n.jsx(c,{elevated:!0,children:n.jsx(d,{children:n.jsxs(r,{spacing:2.5,children:[n.jsxs(r,{spacing:.5,children:[n.jsx(e,{variant:"h5",component:"h1",children:"Sign in"}),n.jsx(e,{variant:"body2",color:"text.secondary",component:"p",children:"Use your work account to open the design system."})]}),n.jsx(g,{severity:"error",title:"We could not sign you in",children:"Check the email address and try again."}),n.jsxs(r,{spacing:2,children:[n.jsx(i,{label:"Email",type:"email",value:"anil@example",error:"Enter a valid email address",required:!0}),n.jsx(i,{label:"Password",type:"password",value:"••••",required:!0})]}),n.jsx(o,{fullWidth:!0,children:"Sign in"}),n.jsxs(e,{variant:"body2",color:"text.secondary",component:"p",children:["No account?"," ",n.jsx(s,{href:"#create",color:"primary",underline:"always",children:"Create one"})]})]})})})})},D=["Default","WithError"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Shell>
      <Card elevated>
        <CardContent>
          <Stack spacing={2.5}>
            <Stack spacing={0.5}>
              <Typography variant="h5" component="h1">
                Sign in
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                Use your work account to open the design system.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Input label="Email" type="email" value="anil@example.com" required />
              <Input label="Password" type="password" value="••••••••" required />
            </Stack>

            <div style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
              <FormControlLabel label="Remember me" controlPosition="start">
                <Checkbox slot="control" checked />
              </FormControlLabel>
              <Typography variant="body2" component="p">
                <Link href="#reset" color="primary" underline="always">
                  Forgot password?
                </Link>
              </Typography>
            </div>

            <Button fullWidth>Sign in</Button>

            <div style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center'
          }}>
              <div style={{
              flex: 1
            }}>
                <Divider />
              </div>
              <Typography variant="caption" color="text.secondary" component="p">
                or
              </Typography>
              <div style={{
              flex: 1
            }}>
                <Divider />
              </div>
            </div>

            <Stack spacing={1}>
              <Button variant="outline" fullWidth>
                Continue with GitHub
              </Button>
              <Button variant="ghost" fullWidth>
                Continue with Google
              </Button>
            </Stack>

            <Typography variant="body2" color="text.secondary" component="p">
              No account?{' '}
              <Link href="#create" color="primary" underline="always">
                Create one
              </Link>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Shell>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Shell>
      <Card elevated>
        <CardContent>
          <Stack spacing={2.5}>
            <Stack spacing={0.5}>
              <Typography variant="h5" component="h1">
                Sign in
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                Use your work account to open the design system.
              </Typography>
            </Stack>

            <Alert severity="error" title="We could not sign you in">
              Check the email address and try again.
            </Alert>

            <Stack spacing={2}>
              <Input label="Email" type="email" value="anil@example" error="Enter a valid email address" required />
              <Input label="Password" type="password" value="••••" required />
            </Stack>

            <Button fullWidth>Sign in</Button>

            <Typography variant="body2" color="text.secondary" component="p">
              No account?{' '}
              <Link href="#create" color="primary" underline="always">
                Create one
              </Link>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Shell>
}`,...a.parameters?.docs?.source}}};export{t as Default,a as WithError,D as __namedExportsOrder,q as default};
