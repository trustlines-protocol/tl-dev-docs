# Trustlines Docs

![Trustlines Docs](assets/images/readme_header.png "Trustlines Docs")

___

## Work In Progress

___

Trustlines Docs will contain all the non-technical documentation related to [Trustlines](https://trustlines.network/).

Here you can find all kind of non-technical details about Trustlines.

This site is a work in progress and the documentation.

### Content

- **Guides**

- **Legal**

### Requirements and steps for running the site locally

#### Requirements

- [Ruby](https://www.ruby-lang.org/en/downloads/) version 2.4.0 or above, including all development headers (ruby version can be checked by running `ruby -v`)
- [RubyGems](https://rubygems.org/pages/download) (which you can check by running `gem -v`)
- [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/) (in case your system doesn’t have them installed, which you can check by running `gcc -v`, `g++ -v` and `make -v` in your system’s command line interface)
- [Jekyll](https://jekyllrb.com/) (currently using v4.0.0)

#### Steps to install locally

- [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Install Gem](https://rubygems.org/pages/download)
- [Install Jekyll](https://jekyllrb.com/docs/installation/)

#### Running locally
- `cd path-to-your-tl-docs-folder/`
- Run `bundle exec jekyll serve`
- Open http://127.0.0.1:4000/ in your favourite browser
  - If you're running into a 404 Not found error, try setting `baseurl: ""` in the `_config.yml` file and run serve again.
