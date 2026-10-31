import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../../components/ui/field";
import { Input } from "../../components/ui/input";

function Login() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-2xl!">
              Sign in to OmniDocAi
            </FieldLegend>
            <FieldDescription>
              Continue working with your documents.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="david@gmail.com" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" required />
              </Field>
              <Field>
                <Button type="submit" className="py-5">
                  Sign in
                </Button>
              </Field>
              <div className="flex justify-center items-center">
                <FieldDescription>
                  New to OmniDocAi?
                  <Link to="/register" className="text-primary no-underline!">
                    {" "}
                    Create an account
                  </Link>
                </FieldDescription>
              </div>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
export default Login;
