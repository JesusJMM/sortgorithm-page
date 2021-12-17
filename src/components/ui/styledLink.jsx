import {Link} from '@chakra-ui/react';

const StyledLink = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      fontWeight="bold"
      color="#0085FF"
    >
      {children}
    </Link>
  )
}

export default StyledLink
