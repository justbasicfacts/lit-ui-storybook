import{j as e}from"./iframe-BGBv2Rkz.js";import"./index-Ds1DpZoa.js";import{D as m}from"./drawer-CTWRj6uh.js";import{B as r}from"./box-HclkYR2K.js";import{T as a}from"./typography-Bk9oATh-.js";import{D as h}from"./divider-BwawZkRe.js";import{L as x,a as b}from"./list-item-text-0rLwm8Md.js";import{L as v}from"./list-item-button-CEKn_M1a.js";import{A as g,T as y}from"./toolbar-CN6V293k.js";import{a as u,T as s}from"./tab-DJjrm18O.js";import{B as o}from"./button-umO8R3TU.js";import{A as T}from"./avatar-CDKBBxIv.js";import{S as i}from"./stack-CMVsJ6e_.js";import{A as j}from"./alert-D5WYbRzG.js";import{C as p}from"./card-Bso1jyN7.js";import{C as c}from"./card-content-fPXuiB19.js";import{T as f,a as C,b as w,c as d,d as t,e as k}from"./table-cell-DIj8BiWB.js";import{C as B}from"./chip-DzT6U0YL.js";import"./preload-helper-Bs85Y4nq.js";const P={title:"Examples/Dashboard",parameters:{layout:"fullscreen"}},A=[{label:"Overview",selected:!0},{label:"Builds",selected:!1},{label:"Components",selected:!1},{label:"Releases",selected:!1},{label:"Settings",selected:!1}],I=[{value:"106",label:"components",detail:"+4 this month"},{value:"0.5.5",label:"latest release",detail:"published 2 days ago"},{value:"417",label:"tests",detail:"all green"}],S=[{component:"Table",change:"sort-direction stops writing an empty attribute",status:"success",label:"Released"},{component:"Tokens",change:"background.muted becomes a theme slot",status:"success",label:"Released"},{component:"Icon",change:"colour resolves in the shadow, not on the host",status:"info",label:"In review"},{component:"Chip",change:"nowrap prop for long labels",status:"success",label:"Released"},{component:"Timeline",change:"gutter width from --ui-timeline-opposite-width",status:"warning",label:"Draft"}],l={render:()=>e.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[e.jsxs(m,{variant:"permanent",open:!0,width:"232px",children:[e.jsxs(r,{padding:"20px",children:[e.jsx(a,{variant:"h6",component:"p",children:"Lit UI"}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:"Design system"})]}),e.jsx(h,{}),e.jsx(x,{children:A.map(n=>e.jsx(v,{selected:n.selected,children:e.jsx(b,{primary:n.label})},n.label))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0},children:[e.jsx(g,{position:"static",color:"background.paper",elevation:0,children:e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsxs(u,{value:"overview",children:[e.jsx(s,{value:"overview",label:"Overview"}),e.jsx(s,{value:"activity",label:"Activity"}),e.jsx(s,{value:"tokens",label:"Tokens"})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(o,{size:"sm",children:"New release"}),e.jsx(T,{initials:"AO",color:"primary",size:36})]})]})})}),e.jsx(r,{padding:"32px",children:e.jsxs(i,{spacing:3,children:[e.jsx(j,{severity:"info",title:"Two packages have unpublished changes",children:"Run pnpm release to publish tokens and lit-ui."}),e.jsx("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))"},children:I.map(n=>e.jsx(p,{children:e.jsx(c,{children:e.jsxs(i,{spacing:.5,children:[e.jsx(a,{variant:"h4",component:"p",children:n.value}),e.jsx(a,{variant:"overline",color:"text.secondary",component:"p",children:n.label}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:n.detail})]})})},n.label))}),e.jsx(p,{children:e.jsx(c,{children:e.jsxs(i,{spacing:1.5,children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",justifyContent:"space-between"},children:[e.jsx(a,{variant:"h6",component:"h3",children:"Recent changes"}),e.jsx(o,{variant:"ghost",size:"sm",children:"View all"})]}),e.jsx(f,{children:e.jsxs(C,{size:"small",children:[e.jsx(w,{children:e.jsxs(d,{children:[e.jsx(t,{variant:"head",children:"Component"}),e.jsx(t,{variant:"head",children:"Change"}),e.jsx(t,{variant:"head",align:"right",children:"Status"})]})}),e.jsx(k,{children:S.map(n=>e.jsxs(d,{children:[e.jsx(t,{children:n.component}),e.jsx(t,{children:n.change}),e.jsx(t,{align:"right",children:e.jsx(B,{label:n.label,color:n.status,variant:"outlined",nowrap:!0})})]},n.component))})]})})]})})})]})})]})]})},Q=["Default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    minHeight: '100vh'
  }}>
      <Drawer variant="permanent" open width="232px">
        <Box padding="20px">
          <Typography variant="h6" component="p">
            Lit UI
          </Typography>
          <Typography variant="caption" color="text.secondary" component="p">
            Design system
          </Typography>
        </Box>
        <Divider />
        <List>
          {NAV.map(item => <ListItemButton key={item.label} selected={item.selected}>
              <ListItemText primary={item.label} />
            </ListItemButton>)}
        </List>
      </Drawer>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0
    }}>
        <AppBar position="static" color="background.paper" elevation={0}>
          <Toolbar>
            <div style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
              <Tabs value="overview">
                <Tab value="overview" label="Overview" />
                <Tab value="activity" label="Activity" />
                <Tab value="tokens" label="Tokens" />
              </Tabs>
              <div style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center'
            }}>
                <Button size="sm">New release</Button>
                <Avatar initials="AO" color="primary" size={36} />
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <Box padding="32px">
          <Stack spacing={3}>
            <Alert severity="info" title="Two packages have unpublished changes">
              Run pnpm release to publish tokens and lit-ui.
            </Alert>

            <div style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}>
              {STATS.map(stat => <Card key={stat.label}>
                  <CardContent>
                    <Stack spacing={0.5}>
                      <Typography variant="h4" component="p">
                        {stat.value}
                      </Typography>
                      <Typography variant="overline" color="text.secondary" component="p">
                        {stat.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" component="p">
                        {stat.detail}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>)}
            </div>

            <Card>
              <CardContent>
                <Stack spacing={1.5}>
                  <div style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                    <Typography variant="h6" component="h3">
                      Recent changes
                    </Typography>
                    <Button variant="ghost" size="sm">
                      View all
                    </Button>
                  </div>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell variant="head">Component</TableCell>
                          <TableCell variant="head">Change</TableCell>
                          <TableCell variant="head" align="right">
                            Status
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {ACTIVITY.map(row => <TableRow key={row.component}>
                            <TableCell>{row.component}</TableCell>
                            <TableCell>{row.change}</TableCell>
                            <TableCell align="right">
                              <Chip label={row.label} color={row.status} variant="outlined" nowrap />
                            </TableCell>
                          </TableRow>)}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};export{l as Default,Q as __namedExportsOrder,P as default};
