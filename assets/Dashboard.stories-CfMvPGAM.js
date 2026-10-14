import{u,R as b,j as e}from"./iframe-DpZyQfZJ.js";import"./index-3LxRijqB.js";import{B as p}from"./box-Drmk6L2p.js";import{T as a}from"./typography-DUgdpZ8o.js";import{D as y}from"./divider-D7ADvu2O.js";import{L as g,a as T}from"./list-item-text-y1mi-YUB.js";import{L as f}from"./list-item-button-BzcoZ-9I.js";import{D as d}from"./drawer-Buo9obc9.js";import{A as w,T as j}from"./toolbar-DgZsfsX7.js";import{a as C,T as r}from"./tab-DwSIUR42.js";import{I as k}from"./icon-button-B0QCJE3q.js";import{B as c}from"./button-C076rtPs.js";import{A as I}from"./avatar-BfwACaHE.js";import{S as m}from"./stack-BK8W8XhA.js";import{A as B}from"./alert-ChCF1FWa.js";import{C as h}from"./card-BLQXnK0a.js";import{C as A}from"./card-content-T4JEgZPu.js";import{C as S}from"./card-header-Dil4kkRT.js";import{T as D,a as O,b as R,c as v,d as t,e as L}from"./table-cell-DsBDIKB-.js";import{C as N}from"./chip-C_boiHP0.js";import{S as H}from"./svg-icon-P6s0BOFD.js";import"./preload-helper-Bs85Y4nq.js";const oe={title:"Examples/Dashboard",parameters:{layout:"fullscreen"}},z=[{label:"Overview",selected:!0},{label:"Builds",selected:!1},{label:"Components",selected:!1},{label:"Releases",selected:!1},{label:"Settings",selected:!1}],V=[{value:"106",label:"components",detail:"+4 this month"},{value:"0.5.5",label:"latest release",detail:"published 2 days ago"},{value:"417",label:"tests",detail:"all green"}],W=[{component:"Table",change:"sort-direction stops writing an empty attribute",status:"success",label:"Released"},{component:"Tokens",change:"background.muted becomes a theme slot",status:"success",label:"Released"},{component:"Icon",change:"colour resolves in the shadow, not on the host",status:"info",label:"In review"},{component:"Chip",change:"nowrap prop for long labels",status:"success",label:"Released"},{component:"Timeline",change:"gutter width from --ui-timeline-opposite-width",status:"warning",label:"Draft"}],E=e.jsx(H,{label:"Open navigation",children:e.jsx("path",{d:"M3 6h18M3 12h18M3 18h18",fill:"none",stroke:"currentColor","stroke-width":"2"})}),l={render:()=>{const i=u(),[x,s]=b.useState(!1),o=e.jsxs(e.Fragment,{children:[e.jsxs(p,{padding:"20px",children:[e.jsx(a,{variant:"h6",component:"p",children:"Lit UI"}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:"Design system"})]}),e.jsx(y,{}),e.jsx(g,{children:z.map(n=>e.jsx(f,{selected:n.selected,onClick:()=>s(!1),children:e.jsx(T,{primary:n.label})},n.label))})]});return e.jsxs("div",{style:{display:"flex",minHeight:"100vh"},children:[i?e.jsx(d,{variant:"permanent",open:!0,width:"232px",children:o}):e.jsx(d,{variant:"temporary",open:x,width:"264px",onClose:()=>s(!1),children:o}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0},children:[e.jsx(w,{position:"static",color:"background.paper",elevation:0,children:e.jsx(j,{children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",justifyContent:"space-between",width:"100%"},children:[i?e.jsxs(C,{value:"overview",children:[e.jsx(r,{value:"overview",label:"Overview"}),e.jsx(r,{value:"activity",label:"Activity"}),e.jsx(r,{value:"tokens",label:"Tokens"})]}):e.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[e.jsx(k,{onClick:()=>s(!0),children:E}),e.jsx(a,{variant:"h6",component:"p",children:"Overview"})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[i?e.jsx(c,{size:"sm",children:"New release"}):null,e.jsx(I,{initials:"AO",color:"primary",size:36})]})]})})}),e.jsx(p,{padding:i?"32px":"16px",children:e.jsxs(m,{spacing:3,children:[e.jsx(B,{severity:"info",title:"Two packages have unpublished changes",children:"Run pnpm release to publish tokens and lit-ui."}),e.jsx("div",{style:{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 200px), 1fr))"},children:V.map(n=>e.jsx(h,{children:e.jsx(A,{children:e.jsxs(m,{spacing:.5,children:[e.jsx(a,{variant:"h4",component:"p",children:n.value}),e.jsx(a,{variant:"overline",color:"text.secondary",component:"p",children:n.label}),e.jsx(a,{variant:"caption",color:"text.secondary",component:"p",children:n.detail})]})})},n.label))}),e.jsxs(h,{children:[e.jsx(S,{title:"Recent changes",children:e.jsx(c,{slot:"action",variant:"ghost",size:"sm",children:"View all"})}),e.jsx(D,{children:e.jsxs(O,{children:[e.jsx(R,{children:e.jsxs(v,{children:[e.jsx(t,{variant:"head",children:"Component"}),e.jsx(t,{variant:"head",children:"Change"}),e.jsx(t,{variant:"head",align:"right",children:"Status"})]})}),e.jsx(L,{children:W.map(n=>e.jsxs(v,{children:[e.jsx(t,{children:n.component}),e.jsx(t,{children:n.change}),e.jsx(t,{align:"right",children:e.jsx(N,{label:n.label,color:n.status,variant:"outlined",nowrap:!0})})]},n.component))})]})})]})]})})]})]})}},pe=["Default"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wide = useWide();
    const [navOpen, setNavOpen] = React.useState(false);
    const nav = <>
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
          {NAV.map(item => <ListItemButton key={item.label} selected={item.selected} onClick={() => setNavOpen(false)}>
              <ListItemText primary={item.label} />
            </ListItemButton>)}
        </List>
      </>;
    return <div style={{
      display: 'flex',
      minHeight: '100vh'
    }}>
        {wide ? <Drawer variant="permanent" open width="232px">
            {nav}
          </Drawer> : <Drawer variant="temporary" open={navOpen} width="264px" onClose={() => setNavOpen(false)}>
            {nav}
          </Drawer>}

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
                {wide ? <Tabs value="overview">
                    <Tab value="overview" label="Overview" />
                    <Tab value="activity" label="Activity" />
                    <Tab value="tokens" label="Tokens" />
                  </Tabs> : <div style={{
                display: 'flex',
                gap: 4,
                alignItems: 'center'
              }}>
                    <IconButton onClick={() => setNavOpen(true)}>{menuIcon}</IconButton>
                    <Typography variant="h6" component="p">
                      Overview
                    </Typography>
                  </div>}
                <div style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center'
              }}>
                  {wide ? <Button size="sm">New release</Button> : null}
                  <Avatar initials="AO" color="primary" size={36} />
                </div>
              </div>
            </Toolbar>
          </AppBar>

          <Box padding={wide ? '32px' : '16px'}>
            <Stack spacing={3}>
              <Alert severity="info" title="Two packages have unpublished changes">
                Run pnpm release to publish tokens and lit-ui.
              </Alert>

              <div style={{
              display: 'grid',
              gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))'
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
                <CardHeader title="Recent changes">
                  <Button slot="action" variant="ghost" size="sm">
                    View all
                  </Button>
                </CardHeader>
                <TableContainer>
                  <Table>
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
              </Card>
            </Stack>
          </Box>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:`An app shell that answers the viewport: a fixed sidebar from 900px up, and the
same navigation in a temporary drawer behind a menu button below it.

The table sits directly in its card: a \`ui-table-cell\` carries the same 16px the
card header uses, so the two line up, while inside a \`ui-card-content\` they
would add up to 32px and the header would look indented from its own content.`,...l.parameters?.docs?.description}}};export{l as Default,pe as __namedExportsOrder,oe as default};
