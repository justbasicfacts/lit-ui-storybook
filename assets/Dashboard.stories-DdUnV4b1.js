import{j as e}from"./iframe-lGCTaxPj.js";import"./index-C-Hz80Os.js";import{B as a}from"./box-KqGNj84B.js";import{D as m}from"./drawer-B_wojyo6.js";import{T as t}from"./typography-EzvJpIOp.js";import{D as h}from"./divider-DIVxONPQ.js";import{L as x,a as y}from"./list-item-text-DMuNYIJ4.js";import{L as b}from"./list-item-button-Bl-VSYR5.js";import{A as g,T as u}from"./toolbar-DzM1aApi.js";import{a as T,T as o}from"./tab-CCgypCM4.js";import{B as i}from"./button-BkvDz9MW.js";import{A as v}from"./avatar-C92DSutz.js";import{A as f}from"./alert-Dkl1dwh9.js";import{C as r}from"./card-B6nrhUw4.js";import{C as p}from"./card-content-Csonrox4.js";import{S as c}from"./stack-CyCBtdD3.js";import{T as j,a as C,b as w,c as d,d as l,e as B}from"./table-cell-C-spKawb.js";import{C as A}from"./chip-DysO06ov.js";import"./preload-helper-Bs85Y4nq.js";const Q={title:"Examples/Dashboard",parameters:{layout:"fullscreen"}},k=[{label:"Overview",selected:!0},{label:"Builds",selected:!1},{label:"Components",selected:!1},{label:"Releases",selected:!1},{label:"Settings",selected:!1}],I=[{value:"106",label:"components",delta:"+4 this month"},{value:"0.5.5",label:"latest release",delta:"published 2 days ago"},{value:"417",label:"tests",delta:"all green"}],D=[{component:"Table",change:"sort-direction stops writing an empty attribute",status:"Released"},{component:"Tokens",change:"background.muted becomes a theme slot",status:"Released"},{component:"Icon",change:"colour resolves in the shadow, not on the host",status:"In review"},{component:"Chip",change:"nowrap prop for long labels",status:"Released"},{component:"Timeline",change:"gutter width from --ui-timeline-opposite-width",status:"Draft"}],S=n=>n==="Released"?"success":n==="In review"?"info":"warning",s={render:()=>e.jsxs(a,{display:"flex",style:{minHeight:"100vh"},children:[e.jsxs(m,{variant:"permanent",open:!0,width:"232px",children:[e.jsxs(a,{padding:"20px",children:[e.jsx(t,{variant:"h6",component:"p",children:"Lit UI"}),e.jsx(t,{variant:"caption",color:"text.secondary",component:"p",children:"Design system"})]}),e.jsx(h,{}),e.jsx(x,{children:k.map(n=>e.jsx(b,{selected:n.selected,children:e.jsx(y,{primary:n.label})},n.label))})]}),e.jsxs(a,{display:"flex",style:{flexDirection:"column",flex:1,minWidth:0},children:[e.jsx(g,{position:"static",color:"background.paper",elevation:0,children:e.jsx(u,{children:e.jsxs(a,{display:"flex",gap:"16px",style:{alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsxs(T,{value:"overview",children:[e.jsx(o,{value:"overview",label:"Overview"}),e.jsx(o,{value:"activity",label:"Activity"}),e.jsx(o,{value:"tokens",label:"Tokens"})]}),e.jsxs(a,{display:"flex",gap:"12px",style:{alignItems:"center"},children:[e.jsx(i,{size:"sm",children:"New release"}),e.jsx(v,{initials:"AO",color:"primary",size:36})]})]})})}),e.jsxs(a,{padding:"24px",display:"flex",style:{flexDirection:"column",gap:24},children:[e.jsx(f,{severity:"info",title:"Two packages have unpublished changes",children:"Run pnpm release to publish tokens and lit-ui."}),e.jsx(a,{display:"grid",gap:"16px",style:{gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))"},children:I.map(n=>e.jsx(r,{children:e.jsx(p,{children:e.jsxs(c,{spacing:4,children:[e.jsx(t,{variant:"h4",component:"p",children:n.value}),e.jsx(t,{variant:"overline",color:"text.secondary",component:"p",children:n.label}),e.jsx(t,{variant:"caption",color:"text.secondary",component:"p",children:n.delta})]})})},n.label))}),e.jsx(r,{children:e.jsx(p,{children:e.jsxs(c,{spacing:12,children:[e.jsxs(a,{display:"flex",gap:"12px",style:{alignItems:"center",justifyContent:"space-between"},children:[e.jsx(t,{variant:"h6",component:"h3",children:"Recent changes"}),e.jsx(i,{variant:"ghost",size:"sm",children:"View all"})]}),e.jsx(j,{children:e.jsxs(C,{size:"small",children:[e.jsx(w,{children:e.jsxs(d,{children:[e.jsx(l,{variant:"head",children:"Component"}),e.jsx(l,{variant:"head",children:"Change"}),e.jsx(l,{variant:"head",align:"right",children:"Status"})]})}),e.jsx(B,{children:D.map(n=>e.jsxs(d,{children:[e.jsx(l,{children:n.component}),e.jsx(l,{children:n.change}),e.jsx(l,{align:"right",children:e.jsx(A,{label:n.status,color:S(n.status),variant:"outlined",nowrap:!0})})]},n.component))})]})})]})})})]})]})]})},X=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box display="flex" style={{
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

      <Box display="flex" style={{
      flexDirection: 'column',
      flex: 1,
      minWidth: 0
    }}>
        <AppBar position="static" color="background.paper" elevation={0}>
          <Toolbar>
            <Box display="flex" gap="16px" style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
              <Tabs value="overview">
                <Tab value="overview" label="Overview" />
                <Tab value="activity" label="Activity" />
                <Tab value="tokens" label="Tokens" />
              </Tabs>
              <Box display="flex" gap="12px" style={{
              alignItems: 'center'
            }}>
                <Button size="sm">New release</Button>
                <Avatar initials="AO" color="primary" size={36} />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Box padding="24px" display="flex" style={{
        flexDirection: 'column',
        gap: 24
      }}>
          <Alert severity="info" title="Two packages have unpublished changes">
            Run pnpm release to publish tokens and lit-ui.
          </Alert>

          <Box display="grid" gap="16px" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}>
            {STATS.map(stat => <Card key={stat.label}>
                <CardContent>
                  <Stack spacing={4}>
                    <Typography variant="h4" component="p">
                      {stat.value}
                    </Typography>
                    <Typography variant="overline" color="text.secondary" component="p">
                      {stat.label}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" component="p">
                      {stat.delta}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>)}
          </Box>

          <Card>
            <CardContent>
              <Stack spacing={12}>
                <Box display="flex" gap="12px" style={{
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                  <Typography variant="h6" component="h3">
                    Recent changes
                  </Typography>
                  <Button variant="ghost" size="sm">
                    View all
                  </Button>
                </Box>
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
                            <Chip label={row.status} color={statusSeverity(row.status)} variant="outlined" nowrap />
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
}`,...s.parameters?.docs?.source}}};export{s as Default,X as __namedExportsOrder,Q as default};
