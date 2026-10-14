import{j as n}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{C as p}from"./card-B6nrhUw4.js";import{C as d}from"./card-content-Csonrox4.js";import{S as r}from"./stack-CyCBtdD3.js";import{T as e}from"./typography-EzvJpIOp.js";import{I as l}from"./input-DwbTq328.js";import{B as t}from"./box-KqGNj84B.js";import{F as h}from"./form-control-label-IPUYddVd.js";import{C as m}from"./checkbox-C--D5YRW.js";import{L as s}from"./link-DshNnZwH.js";import{B as i}from"./button-BkvDz9MW.js";import{D as c}from"./divider-DIVxONPQ.js";import{A as x}from"./alert-Dkl1dwh9.js";import"./preload-helper-Bs85Y4nq.js";const q={title:"Examples/Sign in",parameters:{layout:"fullscreen"}};function y({children:u}){return n.jsx(t,{display:"flex",padding:"32px",bgcolor:"background.muted",style:{minHeight:"100vh",alignItems:"center",justifyContent:"center"},children:n.jsx(t,{style:{width:"100%",maxWidth:420},children:u})})}const a={render:()=>n.jsx(y,{children:n.jsx(p,{elevated:!0,padding:"lg",children:n.jsx(d,{children:n.jsxs(r,{spacing:20,children:[n.jsxs(r,{spacing:4,children:[n.jsx(e,{variant:"h5",component:"h1",children:"Sign in"}),n.jsx(e,{variant:"body2",color:"text.secondary",component:"p",children:"Use your work account to open the design system."})]}),n.jsxs(r,{spacing:16,children:[n.jsx(l,{label:"Email",type:"email",value:"anil@example.com",required:!0}),n.jsx(l,{label:"Password",type:"password",value:"••••••••",required:!0})]}),n.jsxs(t,{display:"flex",gap:"12px",style:{alignItems:"center",justifyContent:"space-between"},children:[n.jsx(h,{label:"Remember me",children:n.jsx(m,{checked:!0})}),n.jsx(e,{variant:"body2",component:"p",children:n.jsx(s,{href:"#reset",color:"primary",underline:"always",children:"Forgot password?"})})]}),n.jsx(i,{fullWidth:!0,children:"Sign in"}),n.jsxs(t,{display:"flex",gap:"12px",style:{alignItems:"center"},children:[n.jsx(t,{display:"block",style:{flex:1},children:n.jsx(c,{})}),n.jsx(e,{variant:"caption",color:"text.secondary",component:"p",children:"or"}),n.jsx(t,{display:"block",style:{flex:1},children:n.jsx(c,{})})]}),n.jsxs(r,{spacing:10,children:[n.jsx(i,{variant:"outline",fullWidth:!0,children:"Continue with GitHub"}),n.jsx(i,{variant:"ghost",fullWidth:!0,children:"Continue with Google"})]}),n.jsxs(e,{variant:"body2",color:"text.secondary",component:"p",children:["No account?"," ",n.jsx(s,{href:"#create",color:"primary",underline:"always",children:"Create one"})]})]})})})})},o={render:()=>n.jsx(y,{children:n.jsx(p,{elevated:!0,padding:"lg",children:n.jsx(d,{children:n.jsxs(r,{spacing:20,children:[n.jsxs(r,{spacing:4,children:[n.jsx(e,{variant:"h5",component:"h1",children:"Sign in"}),n.jsx(e,{variant:"body2",color:"text.secondary",component:"p",children:"Use your work account to open the design system."})]}),n.jsx(x,{severity:"error",title:"We could not sign you in",children:"Check the email address and try again."}),n.jsxs(r,{spacing:16,children:[n.jsx(l,{label:"Email",type:"email",value:"anil@example",error:"Enter a valid email address",required:!0}),n.jsx(l,{label:"Password",type:"password",value:"••••",required:!0})]}),n.jsx(i,{fullWidth:!0,children:"Sign in"}),n.jsxs(e,{variant:"body2",color:"text.secondary",component:"p",children:["No account?"," ",n.jsx(s,{href:"#create",color:"primary",underline:"always",children:"Create one"})]})]})})})})},D=["Default","WithError"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Shell>
      <Card elevated padding="lg">
        <CardContent>
          <Stack spacing={20}>
            <Stack spacing={4}>
              <Typography variant="h5" component="h1">
                Sign in
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                Use your work account to open the design system.
              </Typography>
            </Stack>

            <Stack spacing={16}>
              <Input label="Email" type="email" value="anil@example.com" required />
              <Input label="Password" type="password" value="••••••••" required />
            </Stack>

            <Box display="flex" gap="12px" style={{
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
              <FormControlLabel label="Remember me">
                <Checkbox checked />
              </FormControlLabel>
              <Typography variant="body2" component="p">
                <Link href="#reset" color="primary" underline="always">
                  Forgot password?
                </Link>
              </Typography>
            </Box>

            <Button fullWidth>Sign in</Button>

            <Box display="flex" gap="12px" style={{
            alignItems: 'center'
          }}>
              <Box display="block" style={{
              flex: 1
            }}>
                <Divider />
              </Box>
              <Typography variant="caption" color="text.secondary" component="p">
                or
              </Typography>
              <Box display="block" style={{
              flex: 1
            }}>
                <Divider />
              </Box>
            </Box>

            <Stack spacing={10}>
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Shell>
      <Card elevated padding="lg">
        <CardContent>
          <Stack spacing={20}>
            <Stack spacing={4}>
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

            <Stack spacing={16}>
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
}`,...o.parameters?.docs?.source}}};export{a as Default,o as WithError,D as __namedExportsOrder,q as default};
